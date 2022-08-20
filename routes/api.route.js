const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// auth/
router.get("/", authController.index);
router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/reset-password", authController.resetPassword);

module.exports = router;
