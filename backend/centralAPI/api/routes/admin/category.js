const express = require("express");
const router = express.Router();
const category = require("../../controllers/categoryController");
const { isAuth, isAdmin } = require("../../middlewares/jwt");

router.post("/new", isAdmin, category.newCategory); // Alta de categoria
router.get("/getAll", isAuth, category.getAll); // Listar categorías
router.get("/:id", isAuth, category.getCatById); // Buscar categoría por id
router.put('/:id', isAuth, isAdmin, category.updateCatById); // Actualizar categoría
router.delete("/:id", isAuth, isAdmin, category.deleteCategory); //Eliminar categoría por id

module.exports = router;