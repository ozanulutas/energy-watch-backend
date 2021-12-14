const router = require("express").Router();
const { consumption } = require("../controllers");

const validation = require("../middlewares/validations/consumption");
const auth = require("../middlewares/auth");


(async () => {
  const validations = await validation()
  
  router.get("/", auth("user"), consumption.getAll);
  router.get("/facilities/:facilityId", auth("user"), consumption.getByFacilityId);
  router.post("/", auth("editor"), validations, consumption.create);
  router.put("/:id", auth("editor"), validations, consumption.update);
  router.delete("/:id", auth("admin"), consumption.remove);
})()


module.exports = router;