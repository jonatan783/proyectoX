const express = require("express");
const router = express.Router();
const category = require("../../controllers/categoryController");

router.post("/new", category.newCategory); // Alta de categoria
router.get("/getAll", category.getAll); // Listar categorías
router.get("/:id", category.getCatById); // Buscar categoría por id
router.put('/:id', category.updateCatById); // Actualizar categoría
router.delete("/:id", category.deleteCategory); //Eliminar categoría por id

module.exports = router;