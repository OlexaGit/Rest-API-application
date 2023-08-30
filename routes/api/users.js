const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");

router.patch(
  "/",
  authenticate,
  validateBody(schemas.changeUserSubscriptionSchema),
  ctrl.updateUserSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
