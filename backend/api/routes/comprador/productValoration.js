const express = require("express");
const router = express.Router();
const valorationController = require("../../controllers/valorationController");
const { isAuth } = require("../../middlewares/jwt");

router.post("/add/:productId", isAuth, valorationController.valorationAdd); // Agregar puntuación
router.get("/getAll/:productId", isAuth, valorationController.getAll); // Ver puntuación

module.exports = router;
