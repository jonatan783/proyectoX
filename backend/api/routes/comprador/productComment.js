const express = require("express");
const router = express.Router();
const commentController = require('../../controllers/commentController');

router.post('/add',commentController.addComment); // Postear comentario
router.get('/:productId',commentController.getAllComments); // Ver todos los comentarios

module.exports=router;