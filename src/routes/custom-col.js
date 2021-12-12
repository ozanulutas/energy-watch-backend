const router = require("express").Router();
const { customCol } = require("../controllers");

router.get("/types", customCol.getAllTypes);
router.get("/:tblId", customCol.getByTblId);
router.post("/", customCol.create);
// router.delete("/:id/:tblId", customCol.remove);
router.delete("/:colName/table/:tblId", customCol.remove);

module.exports = router;