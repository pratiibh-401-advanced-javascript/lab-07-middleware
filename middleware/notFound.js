'use strict';

module.exports = (request, response) => {
  response.status(404).send('Not Found');
  // 404 is code for unfound routes
};
