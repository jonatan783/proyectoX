const User = require("../db/models");
const Role = require("../db/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UserServices {
  static async register(req, next) {
    const { name, lastname, email, password, roleId } = req.body;
    try {
      await User.create({
        name,
        lastname,
        email,
        password,
        roleId,
      });
      return "usuario creado";
    } catch (err) {
      throw err;
    }
  }
  static async login(req, next) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({
        where: {
          email,
        },
        attributes: ["id", "name", "lastName", "email"],
      });
      if (!user) throw "Usuario no encontrado";
      else {
        if (bcrypt.compareSync(password, user.password)) {
          let token = jwt.sign({ user }, "albondiga", { expiresIn: "7d" });
          return token;
        } else {
          throw "Password inválido";
        }
      }
    } catch (err) {
      throw err;
    }
  }
  static async userUpdate(req, next) {
    const { id } = req.params;
    try {
      const user = await User.update(req.body, {
        where: {
          id,
        },
        returning: true,
        plain: true,
      });
      return user;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = UserServices;
