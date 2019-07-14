'use strict';

const squared = (num) => (request, response, next) => {
  request.number = num * num;
  next();
};

module.exports = squared;