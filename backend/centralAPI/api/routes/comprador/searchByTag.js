const express = require('express');
const router = express.Router();
const SearchController = require('../../controllers/searchController');
const { isAuth } = require('../../middlewares/jwt');

router.post('/', SearchController.searchByTag); // Busca productos por palabras
router.get('/promo', SearchController.searchByPromo); // Busca productos con descuento
router.get('/:id', SearchController.searchByCat); // Busca productos por ide de categoría
router.post('/direction/add/:userId', isAuth, SearchController.addAddress); // Agregar dirección de envío
router.get('/direction/:userId', isAuth, SearchController.myAddresses); // Consultar direcciones de envío
router.delete('/direction/:id', isAuth, SearchController.addressRemove); // Consultar direcciones de envío


module.exports = router;
