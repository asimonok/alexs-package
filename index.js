const getSafeProperty = require('./utils');

const getName = getSafeProperty(['item', 'item', 'name']);
// just comments

module.exports = {
  getName,
  getSafeProperty,
};
