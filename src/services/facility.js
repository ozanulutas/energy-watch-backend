const { facility, customCol } = require("../db")
const { prepareCustomColumns } = require("../utils/body")

/**
 * Calls custom cols for facility table and
 * returns all facility records with user sepecified cols
 * @returns {array}
 */
const getAll = async () => {
  try {
    const customCols = await customCol.getByTblId(1)
    return await facility.getAll(customCols)

  } catch (err) {
    throw new Error(err)
  }
}

/**
 * Creates a json from custom columns which marked with '+' sign
 * Then calls for create the record
 * @param {object} body - Column name and values to insert
 * @param {string} body.name - Facility's name
 * @param {date} body.membership_start_date - Facility's membership start date
 * @param {date} body.membership_end_date - Facility's membership end date
 * @param {integer} body.employees - Facility's number of employees
 * @param {boolean} body.is_special - Facility's special membership state 
 * @param {object} ...body - User specificied columns for facility (rest)
 * @returns {object} - Returns success message
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
 * @param {object} body - Column name and values to insert 
 * @param {string} body.name - Facility's name
 * @param {date} body.membership_start_date - Facility's membership start date
 * @param {date} body.membership_end_date - Facility's membership end date
 * @param {integer} body.employees - Facility's number of employees
 * @param {boolean} body.is_special - Facility's special membership state 
 * @param {object} ...body - User specificied columns for facility (rest)
 * @returns {object} - Returns success message
 */
const update = async (id, body) => {
  try {
    body.custom_cols = prepareCustomColumns(body)

    return await facility.update(id, body)

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getAll,
  create,
  update
}