const express = require("express");
const { facility } = require("../controllers");

const validation = require("../middlewares/validations/facility");
const auth = require("../middlewares/auth");

const router = express.Router();


(async () => {
  router.get("/", auth("user"), facility.getAll);
  router.post("/", auth("editor"), await validation(), facility.create);
  router.post("/:id/consumptions", auth("editor"), facility.createConsumption);
  // router.get("/:id", auth("user"), facility.getById);
  router.put("/:id", auth("editor"), await validation(), facility.update);
  router.put("/:id/consumptions/:consumptionId", auth("editor"), facility.updateConsumption);
  router.delete("/:id", auth("admin"), facility.remove);
  router.delete("/:id/consumptions/:consumptionId", auth("admin"), facility.removeConsumption);
})()


module.exports = router;