const router = require("express").Router();
const { customCol } = require("../controllers");

const validation = require("../middlewares/validations/custom-col");
const auth = require("../middlewares/auth");

router.get("/types", auth("user"), customCol.getAllTypes);
router.get("/table/:tblId", auth("user"), customCol.getByTblId);
router.post("/", auth("editor"), validation, customCol.create);
// router.delete("/:id/:tblId", customCol.remove);
router.delete("/:colName/table/:tblId", auth("admin"), customCol.remove);


module.exports = router;