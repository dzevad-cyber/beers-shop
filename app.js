const express = require('express');
const morgan = require('morgan');
const path = require('path');

const productRouter = require('./routes/productRoutes');

// start express app
const app = express();

// MIDDLEWARES
app.use(express.json());

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// ROUTES
app.use('/api/v1/products', productRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.all('*', (req, res) => {
  res.status(400).json({
    status: 'fail',
    message: `Cant find ${req.originalUrl} on this server!`,
  });
});

app.use((error, req, res, next) => {
  res.status(400).json({
    status: 'fail',
    message: 'fail',
  });
});

module.exports = app;
