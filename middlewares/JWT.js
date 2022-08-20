require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");
const createTokens = ({ username }) => {
  const accessToken = sign({ username: username }, process.env.PRIVATE_KEY, {
    expiresIn: "10d",
  });
  return accessToken;
};

const verifyToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];
  if (!accessToken) {
    req.authenticated = false;
    return next();
  }

  try {
    const validToken = verify(accessToken, process.env.PRIVATE_KEY);
    if (validToken) {
      req.authenticated = true;
      return next();
    } else {
      res.clearCookie("access-token");
      return res.redirect("/");
    }
  } catch (err) {
    res.clearCookie("access-token");
    return res.redirect("/");
  }
};

module.exports = { createTokens, verifyToken };
