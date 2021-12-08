const router = require("express").Router();
const { facility } = require("../controllers");
// const validationLoader = require("../middlewares/validations/async-validation-loader");
const validations = require("../middlewares/validations/facility");
const auth = require("../middlewares/auth");


(async () => {
  router.get("/", auth("admin"), facility.getAll);
  router.post("/", await validations(), facility.create);
  router.get("/:id", facility.getById);
  router.put("/:id", facility.update);
  router.delete("/:id", facility.remove);
})()

// validationLoader(async () => {
//   router.get("/", facility.getAll);
//   router.post("/", await validations(), facility.create);
//   router.get("/:id", facility.getById);
//   router.put("/:id", facility.update);
//   router.delete("/:id", facility.remove);
// })

// validationLoader(validations, async () => {
//   router.get("/", facility.getAll);
//   router.post("/", await validations(), facility.create);
//   router.get("/:id", facility.getById);
//   router.put("/:id", facility.update);
//   router.delete("/:id", facility.remove);
// })


module.exports = router;