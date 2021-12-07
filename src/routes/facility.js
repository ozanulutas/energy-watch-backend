const router = require("express").Router();
const { facility } = require("../controllers");
const vals = require("../middlewares/validations/facility");

// IICE
// class AsyncRouter {
void new class {
  constructor() {
    this.validations = []
    this.init()
  }

  async init() {
    try {
      this.validations = await vals()

      router.get("/", facility.getAll);
      router.post("/", this.validations, facility.create);
      router.get("/:id", facility.getById);
      router.put("/:id", facility.update);
      router.delete("/:id", facility.remove);
    } catch (error) {
      console.log(error.message);
    }
  }
}

// new AsyncRouter()


module.exports = router;