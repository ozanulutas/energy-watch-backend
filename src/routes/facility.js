const router = require("express").Router();
const { facility } = require("../controllers");
const validations = require("../middlewares/validations/facility");
const auth = require("../middlewares/auth");


(async () => {
  router.get("/", auth("user"), facility.getAll);
  router.post("/", auth("user"), facility.create);
  // router.post("/", auth("user"), await validations(), facility.create);
  router.post("/:id/consumptions", facility.createConsumption);
  router.get("/:id", facility.getById);
  router.put("/:id", facility.update);
  router.put("/:id/consumptions/:consumptionId", facility.updateConsumption);
  router.delete("/:id", facility.remove);
  router.delete("/:id/consumptions/:consumptionId", facility.removeConsumption);
})()


module.exports = router;