const jwt = require('jsonwebtoken')

const checkJWT = (req, res, next) => {
  if (!req.headers.authorization) return res.status(403).send("No posee los permisos necesarios para el contenido");

  const token = req.headers.authorization.split(" ")[1];

  const data = jwt.verify(token, "albondiga");

  if (data) {
    req.user = data;
    next();
  } 
  else {
    return res.status(401).send("No tienen acceso aquí");
  }
};

module.exports = checkJWT;