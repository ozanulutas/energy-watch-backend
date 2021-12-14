const router = require("express").Router();
const { facility } = require("../controllers");

const validation = require("../middlewares/validations/facility");
const auth = require("../middlewares/auth");

const cors = require("../utils/helpers/allow-cors.js");


(async () => {
  const validations = await validation()

  router.get("/", cors, auth("user"), facility.getAll);
  router.post("/", auth("editor"), validations, facility.create);
  // router.get("/:id", auth("user"), facility.getById);
  router.put("/:id", auth("editor"), validations, facility.update);
  router.delete("/:id", auth("admin"), facility.remove);
})()


module.exports = router;