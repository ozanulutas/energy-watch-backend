const router = require("express").Router();
const { facility } = require("../controllers");

router.get("/", facility.getAll);
router.post("/", facility.create);
router.put("/:id", facility.update);


module.exports = router;