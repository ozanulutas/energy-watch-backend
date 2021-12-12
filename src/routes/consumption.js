const router = require("express").Router();
const { consumption } = require("../controllers");
const validations = require("../middlewares/validations/facility");
const auth = require("../middlewares/auth");


(async () => {
  router.get("/", consumption.getAll);
  router.post("/", auth("user"), consumption.create);
  // router.post("/", auth("user"), await validations(), consumption.create);
  router.get("/:id", consumption.getById);
  router.put("/:id", consumption.update);
  router.delete("/:id", consumption.remove);
})()


module.exports = router;