const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { ValidationError } = require('sequelize');

const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
  const err = new Error('Resource Not Found');
  err.title = 'Resource Not Found';
  err.errors = ['Resource Not Found'];
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation Error';
  }
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  console.err(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: err.stack,
  });
});

module.exports = app;
