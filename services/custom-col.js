const { customCol } = require("../db")

const getByTblId = async (tblId) => {
  try {
    return await customCol.getByTblId(tblId)

  } catch (err) {
    throw new Error(err)
  }
}

const create = async (payload) => {
  try {
    payload.name = `+${payload.name}`
    return await customCol.create(payload)

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getByTblId,
  create
}