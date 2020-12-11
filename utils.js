const _get = require('lodash/get')

const getSafeProperty = (propertiesArray) => (object) =>
  _get(object, propertiesArray)

module.exports = getSafeProperty
