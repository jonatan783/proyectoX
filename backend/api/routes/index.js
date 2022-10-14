const express = require("express");
const router = express.Router();
const admin = require("./admin/index");
// const auth = require('./auth/index');
// const compartidas = require('./compartidas/index');
const comprador = require('./comprador/index');
// const superAdmin = require('./superAdmin/index');
const vendedor = require("./vendedor/index");

router.use("/admin", admin);
// router.use("/auth", auth);
// router.use("/var", compartidas);
router.use("/comprador", comprador);
// router.use("/superAdmin", superAdmin);
router.use("/vendedor", vendedor);

module.exports = router;
