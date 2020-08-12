const jwt = require('jsonwebtoken');

const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');
const Email = require('../utils/email');
const AppError = require('../utils/appError');
const Token = require('../models/tokenModel');

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
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

  res.cookie('jwt', token, cookieOptions);

  user.password = undefined;
  res.status(200).json({
    status: 'success',
    token,
    data: { user },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  req.body.isVerified = false;
  const user = await User.create(req.body);
  const { token } = await Token.create({
    _userId: user._id,
    token: signToken(user),
  });

  // if (process.env.NODE_ENV === 'production') {
  // } else {
  //   const url = `${req.protocol}://${req.get(
  //     'host'
  //   )}/api/v1/users/account/confirm/${token}`;

  //   await new Email(user, url).sendWelcome();
  // }

  const url = `${req.protocol}://${req.headers['x-forwarded-host']}/account/verify/${token}`;

  await new Email(user, url).sendWelcome();

  res.status(200).json({
    status: 'success',
    data: { message: `Verification email has been sent to ${user.email}` },
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
      new AppError(
        "You're account has not been verified. Please check your email. Verification email has been sent to you.",
        401
      )
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

  const token = await Token.create({
    _userId: user._id,
    token: signToken(user._id),
  });

  const url = `${req.protocol}://${req.headers['x-forwarded-host']}/account/verify/${token}`;

  await new Email(user, url).sendWelcome();
  res.status(200).json({
    status: 'success',
    data: { message: `A verification email has been sent to ${user.email}` },
  });
});
