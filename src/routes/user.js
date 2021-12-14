const router = require("express").Router();
const { user } = require("../controllers");

const validation = require("../middlewares/validations/user")

router.post("/login", validation.login, user.login);
router.post("/register", validation.register, user.register);
router.put("/:id/settings", validation.updateSettings, user.updateSettings);
router.put("/:id/password", validation.updatePassword, user.updatePassword);

module.exports = router;