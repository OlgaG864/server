const express = require("express");
const {
  createActor,
  updateActor,
  removeActor,
  searchActor,
} = require("../controllers/actor");
const { uploadImage } = require("../middleware/multer");
const { actorInfoValidator, validate } = require("../middleware/validator");

const router = express.Router();

router.post(
  "/create",
  uploadImage.single("avatar"),
  actorInfoValidator,
  validate,
  createActor
);

router.post(
  "/update/:actorId",
  uploadImage.single("avatar"),
  actorInfoValidator,
  validate,
  updateActor
);

router.delete("/:actorId", removeActor);
router.get("/search", searchActor);
module.exports = router;