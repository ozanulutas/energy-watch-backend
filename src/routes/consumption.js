const router = require("express").Router();
const { consumption } = require("../controllers");
const validation = require("../middlewares/validations/consumption");
const auth = require("../middlewares/auth");


(async () => {
  router.get("/", auth("user"), consumption.getAll);
  router.post("/:id", auth("editor"), consumption.create);
  router.put("/:id", auth("editor"), consumption.update);
  router.delete("/:id", auth("admin"), consumption.remove);
})()


module.exports = router;