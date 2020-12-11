const getSafeProperty = require('./utils')

const getName = getSafeProperty(['item', 'name'])

module.exports = {
  getName,
  getSafeProperty,
}
