const { consumption, customCol } = require("../db")
const { prepareCustomColumns } = require("../utils/helpers/body")

/**
 * Returns all consumption records with user sepecified cols
 * @returns {Promise<array>}
 */
const getAll = async () => {
  try {
    // Calls custom cols for facility table
    const customCols = await customCol.getByTblId(2)

    return await consumption.getAll(customCols)

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Creates a json from custom columns which marked with '_' sign
 * Then calls for create the record
 * @param {object} body - Column name and values to insert
 * @returns {Promise<string>} - Returns success message
 */
const create = async (body) => {
  try {
    body.custom_cols = prepareCustomColumns(body)
    return await consumption.create(body)
    
  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Updates a consumption record
 * @param {integer} id - Consumption record id to update
 * @returns {Promise<string>} - Returns success message
 */
const update = async (id, body) => {
  try {
    body.custom_cols = prepareCustomColumns(body)

    return await consumption.update(id, body)

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Removes a consumption record
 * @param {integer} id - Consumption record id to delete 
 * @returns {Promise<string>}
 */
const remove = async function (id) {
  try {
    return await consumption.remove(id)

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getAll,
  create,
  update,
  remove,
}