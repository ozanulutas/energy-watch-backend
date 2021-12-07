const router = require("express").Router();
const { facility } = require("../controllers");
const vals = require("../middlewares/validations/facility");


// const { body, validationResult } = require('express-validator');
// const types = {
//   integer: (name, type) => body(name).isInt().withMessage(`${name} must be ${type}`),
//   boolean: (name, type) => body(name).isBoolean().withMessage(`${name} must be ${type}`),
// }
// data = [
//   {
//     "name": "+location",
//     "alias": "location",
//     "type": "integer"
//   },
//   {
//     "name": "+price",
//     "alias": "price",
//     "type": "boolean"
//   }
// ]
// const validations = data.map(item => {
//   return types[item.type](item.name, item.type)
// })
// console.log(validations);
// router.post("/", validations, facility.create);


router.get("/", facility.getAll);
router.post("/", facility.create);
router.get("/:id", facility.getById);
router.put("/:id", facility.update);
router.delete("/:id", facility.remove);


module.exports = router;