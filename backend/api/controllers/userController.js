const UserServices = require('../services/UserServices');

class UserController {
  static async register(req, res, next) {
    try {
      const respuesta = await UserServices.register(req, res, next);
      return res.status(200).json(respuesta);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async login(req, res, next) {
    try {
      const token = await UserServices.login(req, res, next);
      return res.status(200).json(token);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async userUpdate(req, res, next) {
    try {
      const user = await UserServices.userUpdate(req, res, next);
      return res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
module.exports = UserController;