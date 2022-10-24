const jwt = require("jsonwebtoken");
require("dotenv").config();
const moment = require('moment');

function isAuth(req, res, next) {
  const secret = process.env.JWT_PASS;
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "No tienes autorización" });
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, secret, (err, user) => {
    if (err) return res.sendStatus(401);
    if (user.exp <= moment().unix()) {
      return res.status(401).send({ message: "Sesión expirada" });
    }
    req.user = user;
    next();
  });
}

function isAdmin(req, res, next) {
  const secret = process.env.JWT_PASS;
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "No tienes autorización" });
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, secret, (err, user) => {
    if (err) return res.sendStatus(401);
    if (user.usuario.data !== 2) return res.sendStatus(401);
    req.user = user;
    next();
  });
}

function isSuperAdmin(req, res, next) {
  const secret = process.env.JWT_PASS;
  if (!req.headers.authorization) {
    return res.status(401).send({ message: "No tienes autorización" });
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, secret, (err, user) => {
    if (err) return res.sendStatus(401);
    if (user.usuario.data !== 1) return res.sendStatus(401);
    req.user = user;
    next();
  });
}

function recoveryPass (req, res, next) {
  const secret = process.env.JWT_PASS;
  const { token } = req.params;
  jwt.verify(token, secret, (err, user) => {
    if (err) return res.sendStatus(401);
    req.user = user;
    next();
  });
}

module.exports = {isAuth, isAdmin, isSuperAdmin, recoveryPass};