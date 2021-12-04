const { facility } = require("../db")

const getAll = async () => {
  console.log("facility service");
  try {
    return await facility.getAll()

  } catch (err) {
    throw new Error(err)
  }
}

const create = async (body) => {
  console.log("facility service");
  // TODO: sütun oluştur
  try {
    const custom_cols = {}

    for (const col in body) {
      if (col.includes("+")) {
        custom_cols[col] = body[col]
        delete body[col]
      }
    }
    body.custom_cols = custom_cols

    return await facility.create(body)

  } catch (err) {
    throw new Error(err)
  }
}


module.exports = {
  getAll,
  create
}