const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// auth/
router.get("/", authController.index);
router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/reset-password", authController.resetPassword);
router.get(
  "/reset-password/confirm/:id-token",
  authController.confirmResetPassword
);

module.exports = router;
