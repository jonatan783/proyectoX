const SearchServices = require("../services/SearchServices");

class SearchController {
  static async searchByTag(req, res, next) {
    try {
      const productos = await SearchServices.searchByTag(req, next);
      return res.status(200).json(productos);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  static async searchByCat(req, res, next) {
    try {
      const productos = await SearchServices.searchByCat(req, next);
      return res.status(200).json(productos);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async searchByPromo(req, res, next) {
    try {
      const productos = await SearchServices.searchByPromo(req, next);
      return res.status(200).json(productos);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async addAddress(req, res, next) {
    try {
      const respuesta = await SearchServices.addAddress(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async myAddresses(req, res, next) {
    try {
      const direcciones = await SearchServices.myAddresses(req, next);
      return res.status(200).json(direcciones);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async addressRemove(req, res, next) {
    try {
      const respuesta = await SearchServices.addressRemove(req, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = SearchController;
