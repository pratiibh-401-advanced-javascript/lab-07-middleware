'use strict';

const express = require('express');

const ErrorHandler = require('./middleware/error.js');

const notFound = require('./middleware/notFound.js');

const requestTime = require('./middleware/requestTime.js');

const consoleLogger = require('./middleware/consoleLogger.js');

const squareValue = require('./middleware/squareValue.js');

const myRouter = require('./routes/routes.js');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(requestTime);
app.use(consoleLogger);
app.use(myRouter);

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', squareValue(3), (req,res) => {
  res.status(200).send(`Route B, ${req.number}`);
});

app.use('*', notFound);
app.use(ErrorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));


