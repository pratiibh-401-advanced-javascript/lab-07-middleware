'use strict';

const express = require('express');

const myRouter = express.Router();

const errorOnNext = require('../middleware/errorOnNext.js');

myRouter.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

myRouter.get('/d', errorOnNext, (req,res) => {
  res.status(200).send('Route D');
});

module.exports = myRouter;