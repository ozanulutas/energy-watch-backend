const router = require("express").Router();
const { customCol } = require("../controllers");

router.get("/:tblId", customCol.getByTblId);
router.post("/", customCol.create);
router.delete("/:id/:tblId", customCol.remove);

module.exports = router;