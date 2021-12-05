const { customCol, facility } = require("../db")

const getByTblId = async (tblId) => {
  try {
    return await customCol.getByTblId(tblId)

  } catch (err) {
    throw new Error(err)
  }
}

const create = async (body) => {
  try {
    // @TODO: duplicate kontrolü
    body.name = `+${body.name}`
    return await customCol.create(body)

  } catch (err) {
    throw new Error(err)
  }
}

const remove = async (id) => {
  try {
    const colName = await customCol.remove(id)
    await facility.removeJsonKey(colName)

    return { message: "Custom column is succesfully deleted." }

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getByTblId,
  create,
  remove,
}