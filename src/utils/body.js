// Body related helpers

/**
 * Creates a custom column object from '_' sign marked keys and afterwards removes this marked keys
 * @param {object} body 
 * @returns {object}
 */

function prepareCustomColumns(body) {
  const customCols = {}

  for (const key in body) {
    if (key.includes("_")) {
      customCols[key] = body[key]
      delete body[key]
    }
  }
  return customCols
}


module.exports = {
  prepareCustomColumns,
}