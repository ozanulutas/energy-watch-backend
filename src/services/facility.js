const { facility, customCol } = require("../db")
const { prepareCustomColumns } = require("../utils/body")

/**
 * Returns all facility records with user sepecified cols
 * @returns {Promise<array>}
 */
const getAll = async () => {
  try {
    // Calls custom cols for facility table
    const customCols = await customCol.getByTblId(1)
    return await facility.getAll(customCols)

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Gets a facility record by id
 * @param {integer} id - Facility record id
 * @returns {Promise<object>}
 */
const getById = async (id) => {
  try {
    // Calls custom cols for facility table
    const customCols = await customCol.getByTblId(1)
    return await facility.getById(id, customCols)

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

    return await facility.create(body)

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Updates a facility record
 * @param {integer} id - Facility record id to update
 * @returns {Promise<string>} - Returns success message
 */
const update = async (id, body) => {
  try {
    body.custom_cols = prepareCustomColumns(body)

    return await facility.update(id, body)

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Removes a facility record
 * @param {integer} id - Facility record id to delete 
 * @returns {Promise<string>}
 */
const remove = async function (id) {
  try {
    return await facility.remove(id)

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getAll,
  create,
  update,
  remove,
  getById
}