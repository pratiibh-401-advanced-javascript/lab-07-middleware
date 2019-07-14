'use strict';

module.exports = (err, request, response) => {
  response.status(500).send(err);
  // 500 is code for error handling
};
