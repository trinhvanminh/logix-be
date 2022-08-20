const status = require("http-status");

class AuthController {
  // GET /
  index(req, res, next) {
    res.send(
      {
        message: "success",
      },
      status.OK
    );
  }

  // POST /login
  login(req, res, next) {
    res.json({
      message: "Hello World!",
    });
  }

  // POST /register
  register(req, res, next) {
    res.json({
      message: "Hello World!",
    });
  }

  // POST /reset-password
  resetPassword(req, res, next) {
    res.json({
      message: "Hello World!",
    });
  }

  // GET /reset-password/confirm/:id-token
  confirmResetPassword(req, res, next) {
    res.json({
      message: "Hello World!",
    });
  }
}

module.exports = new AuthController();
