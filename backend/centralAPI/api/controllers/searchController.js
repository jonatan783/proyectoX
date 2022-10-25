const SearchServices = require('../services/SearchServices');

class SearchController {
  static async searchByTag(req, res, next) {
    try {
      const productos = await SearchServices.searchByTag(req, next);
      return res.status(200).json(productos);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = SearchController;