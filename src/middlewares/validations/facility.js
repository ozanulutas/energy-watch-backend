const { body } = require('express-validator');
const { customCol } = require("../../services");

// class Vals {
//   constructor() {
//     this.validations = []
//     this.customCols = []

//     this.handlers = {
//       integer: (name, type) => body(name).isInt().withMessage(`${name} must be ${type}`),
//       boolean: (name, type) => body(name).isBoolean().withMessage(`${name} must be ${type}`),
//     };

//     this.init()
//   }

//   async init() {
//     // await this.setCustomCols()
//     this.customCols = await customCol.getByTblId(1)
//     this.setValidaitons()
//   }

//   async setCustomCols() {
//     this.customCols = await customCol.getByTblId(1)
//   }

//   setValidaitons() {
//     this.validations = this.customCols.map(col => {
//       return this.handlers[col.type](col.name, col.type)
//     })
//   }

//   getValidations() {
//     return this.validations
//   }
// }

// module.exports = Vals

async function vals() {
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
    // console.log(validations);
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
