const CommentServices = require('../services/CommentServices');

class CommentController {
  static async addComment(req, res, next) {
    try {
      const coment = await CommentServices.addComment(req, next);
      return res.status(200).json(coment);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getAllComments(req, res, next) {
    try {
      const coment = await CommentServices.getAllComments(req, next);
      return res.status(200).json(coment);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = CommentController;