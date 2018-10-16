import root from 'window-or-global'

/**
 * a list of vendor prefixes to use for css-feature testing
 * @type {Array}
 */
var vendorPrefixes = ['webkit', 'moz', 'ms']

/**
 * tests if a value is supported on a property
 * @param  {String} prop  property to test for value support
 * @param  {String} value unprefixed value to test
 * @return {String|Boolean}       returns the supported value or `false`
 */
const cssSupportsValue = (prop, value) => {
  if (!root.document) {
    return false
  }

  var div = root.document.createElement('div')
  const values = [value, ...vendorPrefixes.map(prefix => `-${prefix}-${value}`)]
  for (let i = 0; i < values.length; i++) {
    div.style[prop] = values[i]
    if (values[i] === div.style[prop]) {
      // value is supported
      div.remove()
      return values[i]
    }
  }
  // no supported value found
  div.remove()
  return false
}

const position = {
  sticky: cssSupportsValue('position', 'sticky')
}

export {position}
export default {position}
