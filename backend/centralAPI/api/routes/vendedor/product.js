const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");
const { isAuth } = require("../../middlewares/jwt");

router.get("/", isAuth ,productController.getAll); // Busca todos los productos
router.get("/:id", isAuth, productController.getById); // Busca producto por id
router.post("/add", isAuth, productController.addProduct); // Añade producto - Peso en kg y diminsiones [cm, cm, cm]
router.put("/:id", isAuth, productController.updateProduct); //Actualizar producto
router.delete("/:id", isAuth, productController.deleteProduct); //Eliminar producto
router.get("/category/:id", isAuth, productController.getByCategory); // Filtrar por categoria (revisar asociación)
router.get("/name/:name", isAuth, productController.getByName); //Buscar por nombre
//router.put("/valoration/:id", productController.addValoration);
module.exports = router;
