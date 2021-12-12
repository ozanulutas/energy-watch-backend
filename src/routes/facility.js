const express = require("express");
const { facility } = require("../controllers");

const validation = require("../middlewares/validations/facility");
const auth = require("../middlewares/auth");

const router = express.Router();


(async () => {
  router.get("/", auth("user"), facility.getAll);
  router.post("/", auth("editor"), await validation(), facility.create);
  // router.get("/:id", auth("user"), facility.getById);
  router.put("/:id", auth("editor"), await validation(), facility.update);
  router.delete("/:id", auth("admin"), facility.remove);
})()


module.exports = router;