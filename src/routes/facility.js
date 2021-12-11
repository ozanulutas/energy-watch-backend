const router = require("express").Router();
const { facility } = require("../controllers");
const validations = require("../middlewares/validations/facility");
const auth = require("../middlewares/auth");


(async () => {
  router.get("/", auth("user"), facility.getAll);
  router.post("/", auth("user"), facility.create);
  // router.post("/", auth("user"), await validations(), facility.create);
  router.get("/:id", facility.getById);
  router.put("/:id", facility.update);
  router.delete("/:id", facility.remove);
})()


module.exports = router;