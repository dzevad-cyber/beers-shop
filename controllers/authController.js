const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const catchAsync = require('../utils/catchAsync');
const Email = require('../utils/email');
const AppError = require('../utils/appError');

const User = require('../models/userModel');
const Token = require('../models/tokenModel');

const getURL = (req, token, clientPath, apiPath) => {
  if (req.get('host') === '127.0.0.1:5000' && req.headers['x-forwarded-host']) {
    // production heroku
    console.log('1. //', req, token, clientPath);
    return `${req.protocol}://${req.get('host')}/${clientPath}/${token}`;
  }
  if (req.headers['x-forwarded-host']) {
    console.log('2.//');
    // in dev mode i.e client + server:dev
    return `${req.protocol}://${req.headers['x-forwarded-host']}/${clientPath}/${token}`;
  }
  console.log('3. //');
  return `${req.protocol}://${req.get(
    'host'
  )}/api/v1/users/${apiPath}/${token}`;
};

const signToken = user => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statuCode, res) => {
  const token = signToken(user);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  // if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  user.password = undefined;

  res.cookie('jwt', token, cookieOptions);
  res.status(200).json({
    status: 'success',
    // token,
    data: { user },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create({
    ...req.body,
    isVerified: false,
    role: 'user',
  });
  const { token } = await Token.create({
    _userId: user._id,
    token: signToken(user),
  });

  const url = getURL(req, token, 'account/verify', 'account/confirm');
  await new Email(user, url).sendWelcome();

  res.status(200).json({
    status: 'success',
    data: {
      message: `Verification email has been sent to ${user.email}`,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return next(new AppError('Please provide email and password.', 400));
  }
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 400));
  }

  if (!user.isVerified) {
    const { token } = await Token.create({
      _userId: user._id,
      token: signToken(user._id),
    });

    const url = `${req.protocol}://${req.headers['x-forwarded-host']}/account/verify/${token}`;

    await new Email(user, url).sendWelcome();

    return next(
      new AppError('Please check your email to verify your account.', 401)
    );
  }

  createSendToken(user, 200, res);
});

// get
exports.confirmAccount = catchAsync(async (req, res, next) => {
  const token = await Token.findOne({ token: req.params.token });
  if (!token) {
    return next(new AppError('User not found. Your token expired.', 400));
  }

  const user = await User.findOne({ _id: token._userId });
  if (!user) return next(new AppError('User not found.', 400));

  user.isVerified = true;
  await user.save({ validateBeforeSave: false });

  createSendToken(user, 200, res);
});

exports.resendToken = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  if (!email) return next(new AppError('Please enter an email.', 400));

  const user = await User.findOne({ email });
  if (!user) return next(new AppError('Account not found.', 400));
  if (user.isVerified) {
    return next(new AppError('Account has been verified', 400));
  }

  const { token } = await Token.create({
    _userId: user._id,
    token: signToken(user._id),
  });

  // url for client in dev mode
  // const url = `${req.protocol}://${req.headers['x-forwarded-host']}/account/verify/${token}`;

  // url for server
  const url = `${req.protocol}://${req.headers.host}/api/v1/users/account/confirm/${token}`;

  await new Email(user, url).sendWelcome();

  res.status(200).json({
    status: 'success',
    data: { message: `A verification email has been sent to ${user.email}` },
  });
});

exports.logout = catchAsync(async (req, res, next) => {
  console.log('in logout controller');
  res.clearCookie('jwt');

  res.status(200).json({
    status: 'success',
    data: null,
  });
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id).select('+password');
  if (!user) return next(new AppError('Please log in.', 403));

  if (!(await user.correctPassword(req.body.oldPassword, user.password))) {
    return next(new AppError('Wrong password', 401));
  }

  user.password = req.body.newPassword;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  res.clearCookie('jwt');
  createSendToken(user, 200, res);
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  // todo 1. get user based on posted email
  const user = await User.findOne({ email });
  if (!user) return next(new AppError('User not found.', 404));

  // generate reset token
  const { token } = await Token.create({
    _userId: user._id,
    token: signToken(user),
  });

  // send it to user's mail
  try {
    const resetUrl = `${req.protocol}://${req.get(
      'host'
    )}/reset-password/${token}`;

    console.log('RESET_URL//', resetUrl);

    await new Email(user, resetUrl).sendPasswordReset();
    res.status(200).json({
      status: 'success',
      data: { message: 'Please check your email to reset password.' },
    });
  } catch (err) {
    return next(new AppError('Error sending email. Try again later.', 500));
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const { _userId } = await Token.findOne({ token: req.params.token });

  const user = await User.findById(_userId);
  if (!user) return next(new AppError('Token invalid or expired.', 400));

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save({ validateBeforeSave: true });

  res.status(200).json({
    status: 'success',
    data: { user },
  });
});

// MIDDLEWARES
exports.protect = catchAsync(async (req, res, next) => {
  const { jwt: token } = req.cookies;
  if (!token) return next(new AppError('Please log in.', 401));

  const verifiedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  const user = await User.findById(verifiedToken.id);
  if (!user) return next(new AppError('User not found.', 401));

  if (user.passwordChanged(verifiedToken.iat)) {
    return next(new AppError('Password chenged. Please login again.', 401));
  }

  req.user = user;
  next();
});

exports.restrictTo = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return next(new AppError('Permision denied!', 403));
  }

  next();
};
