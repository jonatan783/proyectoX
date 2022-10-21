const express = require("express");
const router = express.Router();
const commentController = require('../../controllers/commentController');
const { isAuth } = require('../../middlewares/jwt');

router.post('/add', isAuth,commentController.addComment); // Postear comentario
router.get('/:productId', isAuth,commentController.getAllComments); // Ver todos los comentarios

module.exports=router;