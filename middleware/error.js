'use strict';

module.exports = (err, request, response, next) => {
  response.status(500).send(err);
  // 500 is code for error handling
}
