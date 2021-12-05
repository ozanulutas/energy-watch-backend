const router = require("express").Router();
const { customCol } = require("../controllers");

router.get("/:tblId", customCol.getByTblId);
router.post("/", customCol.create);

module.exports = router;