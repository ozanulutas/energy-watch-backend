// Body related helpers

/**
 * Creates a custom column object from + sign marked keys and afterwards removes this marked keys
 * @param {object} body 
 * @returns {object}
 */

function prepareCustomColumns(body) {
  const customCols = {}

  for (const key in body) {
    if (key.includes("+")) {
      customCols[key] = body[key]
      delete body[key]
    }
  }
  return customCols
}


module.exports = {
  prepareCustomColumns,
}