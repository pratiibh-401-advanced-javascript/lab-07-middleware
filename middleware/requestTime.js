'use strict';

module.exports = (request, response, next) => {
  request.requestTime = new Date();
  next();
};
