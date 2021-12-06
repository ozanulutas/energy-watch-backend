// Body related helpers

/**
 * Creates a and returns json from custom columns which marked with '+' sign
 * @param {object} body 
 * @returns {object}
 */

function prepareCustomColumns(body) {
  const customCols = {}

  for (const col in body) {
    if (col.includes("+")) {
      customCols[col] = body[col]
      delete body[col]
    }
  }
  return customCols
}


module.exports = {
  prepareCustomColumns,
}