const express = require("express");

const ctrl = require("../../controllers");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/user");
const router = express.Router();

//signup
router.post("/register", ctrl.register);

module.exports = router;
