// Async function wrapper
function validationLoader(validations, callback) {
  callback(validations)
}

// class AsyncValidationLoader {
//   constructor(validations, callback) {
//     callback(validations)
//   }
// }

// class AsyncValidationLoader {
//   constructor(validations, callback) {
//     // this.validations = validations()
//     this.init(validations, callback)
//   }

//   async init(validations, callback) {
//     try {
//       callback(await validations())

//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// }

module.exports = validationLoader