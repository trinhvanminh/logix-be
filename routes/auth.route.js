const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { verifyToken } = require("../middlewares/jwt");

router.get("/", verifyToken, authController.index);
router.get("/*", verifyToken, authController.stuff);

module.exports = router;
