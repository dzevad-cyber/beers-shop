const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');

const globalErrorHandler = require('./utils/globalErrorHandler');
const productRouter = require('./routes/productRoutes');
const AppErr = require('./utils/appError');

const userRouter = require('./routes/userRoutes');

const app = express();

// ---------- GLOBAL MIDDLEWARES --------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '10kb' }));
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  message: 'Too many request from this IP. Please try again in an hour.',
});
app.use('/api', limiter);
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// ---------- ROUTES --------------
app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.all('*', (req, res, next) => {
  next(new AppErr(`Cant find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

// new comment
// new comment
// new comment
console.log('hello world');
console.log('hello world');
console.log('hello world');

module.exports = app;
