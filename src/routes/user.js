const router = require("express").Router();
const { user } = require("../controllers");

const validation = require("../middlewares/validations/user")

router.post("/login", validation.login, user.login);
router.post("/register", validation.register, user.register);

module.exports = router;