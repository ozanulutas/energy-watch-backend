const router = require("express").Router();
const { userRole } = require("../controllers");

router.get("/", userRole.getAll);

module.exports = router;