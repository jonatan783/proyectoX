const express = require("express");
const router = express.Router();
const productController = require("../../controllers/productController");

router.get("/", productController.getAll); // Busca todos los productos
router.get("/:id", productController.getById); // Busca producto por id
router.post("/add", productController.addProduct); // Añade producto (revisar asociación)
router.put("/:id", productController.updateProduct); //Actualizar producto
router.delete("/:id", productController.deleteProduct); //Eliminar producto
router.get("/category/:id", productController.getByCategory); // Filtrar por categoria (revisar asociación)
router.get("/name/:name", productController.getByName); //Buscar por nombre
//router.put("/valoration/:id", productController.addValoration);
module.exports = router;
