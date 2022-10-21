const { productcomment } = require("../db/models");

class CommentServices {
  static async addComment(req, next) {
    const { userId, productId, userName, comment } = req.body;
    try {
      const newComment = await productcomment.create({
        userId,
        productId,
        userName,
        comment,
      });
      return newComment;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async getAllComments(req, next) {
    const { productId } = req.params;
    try {
      const coments = await productcomment.findAll({
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
