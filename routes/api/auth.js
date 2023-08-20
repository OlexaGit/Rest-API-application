const express = require("express");

const ctrl = require("../../controllers");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/user");
const router = express.Router();

//signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// signin
router.post("/login", validateBody(schemas.registerSchema), ctrl.login);

module.exports = router;
