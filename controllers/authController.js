const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  user.password = undefined;
  res.status(200).json({
    status: 'success',
    data: { user },
  });
});
