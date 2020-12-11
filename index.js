const getSafeProperty = require('./utils')

const getName = getSafeProperty(['item', 'item', 'name'])

module.exports = {
  getName,
  getSafeProperty,
}
