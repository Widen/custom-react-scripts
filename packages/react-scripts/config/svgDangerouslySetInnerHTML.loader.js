'use strict'

module.exports = function (content) {
  content = content.replace('<svg', '<svg focusable="false"')
  return (
    'module.exports = require("react").createElement("span", {' +
    'dangerouslySetInnerHTML: {' +
    '__html: ' +
    JSON.stringify(content) +
    '}' +
    '});'
  )
}
