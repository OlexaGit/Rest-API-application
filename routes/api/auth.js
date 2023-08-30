const express = require("express");

const ctrl = require("../../controllers");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");
const router = express.Router();

//signup
router.post(
  "/register",
  validateBody(schemas.registerAndLoginSchema),
  ctrl.register
);

// signin
router.post("/login", validateBody(schemas.registerAndLoginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
