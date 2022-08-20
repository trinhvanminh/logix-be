require("dotenv").config();
const express = require("express");
const app = express();
const route = require("./routes/index.route");
const morgan = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");

// set body-parse to parse req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

// set static folder
app.use(express.static(path.join(__dirname, "public")));

//	HTTP logger
app.use(morgan("combined"));

// Routes
route(app);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
