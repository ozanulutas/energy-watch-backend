const router = require("express").Router();
const { facility } = require("../controllers");

/*
const { body, validationResult } = require('express-validator');

const types = {
  integer: (name, type) => () => {console.log("asd"); return body(name).isInt().withMessage(`${name} must be ${type}`)},
  boolean: (name, type) => () => body(name).isBoolean().withMessage(`${name} must be ${type}`),
}

data = [
  {
    "name": "+location",
    "alias": "location",
    "type": "integer"
  },
  {
    "name": "+profit",
    "alias": "profit",
    "type": "boolean"
  }
]

const validations = data.map(item => {
  return types[item.type](item.name, item.type)()
})

// console.log(validations);

router.post("/", validations, facility.create);
*/

router.post("/", facility.create);
router.get("/", facility.getAll);
router.put("/:id", facility.update);
router.delete("/:id", facility.remove);


module.exports = router;