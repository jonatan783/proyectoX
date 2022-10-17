const { ProductComment } = require("../db/models");
const { Op } = require("sequelize");

class CommentServices {
  static async addComment(req, next) {
    const { userId, productId, userName, comment } = req.body;
    try {
      const newComment = await ProductComment.create({
        userId,
        productId,
        userName,
        comment,
      });
      return newComment;
    } catch (err) {
      throw err;
    }
  }
  static async getAllComments(req, next) {
    const { productId } = req.params;
    try {
      const coments = await ProductComment.findAll({
        where: {
          productId,
        },
      });
      return coments;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = CommentServices;
