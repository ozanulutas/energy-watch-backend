const { body } = require('express-validator');
const { customCol } = require("../../services");

async function vals () {
  try {
    const handlers = {
      integer: (name, type) => body(name).isInt().withMessage(`${name} must be ${type}`),
      boolean: (name, type) => body(name).isBoolean().withMessage(`${name} must be ${type}`),
    };

    const customCols = await customCol.getByTblId(1)

    const cols = [
      ...customCols
    ]

    const validations = cols.map(col => {
      return handlers[col.type](col.name, col.type)
    })
    console.log(validations);
    return validations
  } catch (error) {
    console.log(error.message);
  }
}

// (async () => {
//   try {
//     const handlers = {
//       integer: (name, type) => body(name).isInt().withMessage(`${name} must be ${type}`),
//       boolean: (name, type) => body(name).isBoolean().withMessage(`${name} must be ${type}`),
//     };

//     const customCols = await customCol.getByTblId(1)

//     const cols = [
//       ...customCols
//     ]


//     const validations = cols.map(col => {
//       return handlers[col.type](col.name, col.type)
//     })
//     console.log("validations");
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

// function vals() {
//   return async () => {
//     try {
//       const handlers = {
//         integer: (name, type) => body(name).isInt().withMessage(`${name} must be ${type}`),
//         boolean: (name, type) => body(name).isBoolean().withMessage(`${name} must be ${type}`),
//       };
  
//       const customCols = await customCol.getByTblId(1)
  
//       const cols = [
//         ...customCols
//       ]
  
  
//       return cols.map(col => {
//         return handlers[col.type](col.name, col.type)
//       })
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// }

module.exports = vals
