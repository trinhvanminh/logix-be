function route(app) {
  app.use("/api/auth", require("./api.route"));
}

module.exports = route;
