const catchAsync = require('../utils/catchAsync');
const factory = require('../utils/handlerFactory');
const User = require('../models/userModel');
const AppError = require('../utils/appError');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    data: { users },
  });
});

exports.getUser = factory.getOne(User);
exports.updateUser = factory.updateOne(User);

// MIDDLEWARES
exports.getMe = (req, res, next) => {
  req.params.id = req.user._id;
  next();
};

exports.checkUpdateBody = (req, res, next) => {
  const forbidenValues = ['isVerified', 'role', 'password'];
  Object.keys(req.body).forEach(key => {
    if (forbidenValues.includes(key))
      return next(new AppError('Invalid input.', 400));
  });

  next();
};
