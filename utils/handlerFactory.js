const catchAsync = require('./catchAsync');
const AppError = require('./appError');

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { [`${Model.modelName}`.toLowerCase()]: doc },
    });
  });

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    await Model.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      data: null,
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) return next(new AppError(`${Model.modelName} not found.`, 404));

    res.status(200).json({
      status: 'success',
      data: { [`${Model.modelName}`.toLowerCase()]: doc },
    });
  });

exports.getOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);

    if (!doc) return next(new AppError(`${Model.modelName} not found.`, 404));

    res.status(200).json({
      status: 'success',
      data: { [`${Model.modelName}`.toLowerCase()]: doc },
    });
  });

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    const docs = await Model.find();

    res.status(200).json({
      status: 'success',
      results: docs.length,
      data: { [`${Model.modelName}s`.toLowerCase()]: docs },
    });
  });
