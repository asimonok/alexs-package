const getSafeProperty = require('./utils')

const getName = getSafeProperty(['item', 'item', 'name'])
// just comment

module.exports = {
  getName,
  getSafeProperty,
}
