const { verifyToken } = require("../middlewares/jwt");

function route(app) {
  app.use("/auth", verifyToken, require("./auth.route"));
}

module.exports = route;
