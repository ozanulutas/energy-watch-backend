const { facility, customCol } = require("../db")

const getAll = async () => {
  try {
    const customCols = await customCol.getByTblId(1)
    return await facility.getAll(customCols)

  } catch (err) {
    throw new Error(err)
  }
}

const create = async (body) => {
  try {
    const custom_cols = {}

    // set custom cols
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

const update = async (id, body) => {
  try {
    const custom_cols = {}

    // set custom cols
    for (const col in body) {
      if (col.includes("+")) {
        custom_cols[col] = body[col]
        delete body[col]
      }
    }
    body.custom_cols = custom_cols
    console.log(body);

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