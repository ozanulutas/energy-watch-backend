const router = require("express").Router();
const { facility } = require("../controllers");

router.get("/", facility.getAll);

module.exports = router;