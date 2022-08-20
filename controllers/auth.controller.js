class AuthController {
  // GET /
  index(req, res, next) {
    res.json({
      message: "Hello World!",
    });
  }

  // GET /*
  stuff(req, res, next) {
    res.redirect("/");
  }
}

module.exports = new AuthController();
