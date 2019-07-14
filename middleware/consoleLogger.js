'use strict';

module.exports = (request, response, next) => {
  console.log(request.path, request.method, request.requestTime);
  next();
};