const get = require('lodash/get');

const getSafeProperty = (propertiesArray) => (object) =>
  get(object, propertiesArray);

module.exports = getSafeProperty;
