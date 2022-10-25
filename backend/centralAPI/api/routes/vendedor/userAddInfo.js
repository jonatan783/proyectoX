const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
const { isAuth } = require("../../middlewares/jwt");

router.post("/", isAuth ,userController.addInfo); // Cargar información adicional del vendedor
module.exports = router;
