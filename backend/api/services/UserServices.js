const {user, role} = require("../db/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

class UserServices {
  static async register(req, next) {
    const { name, lastname, email, password, rolId } = req.body;
    try {
      await user.create({
        name,
        lastname,
        email,
        password,
        rolId,
      });
      return "usuario creado";
    } catch (err) {
      console.log("error de servicio", err)
      throw err;
    }
  }

  static async login(req, next) {
    const { email, password } = req.body;
    const secret = process.env.JWT_PASS;
    try {
      const user1 = await user.findOne({
        where: {
          email,
        },
      attributes: ["id", "name", "lastname", "email", "password", "rolId"],
      });
      if (!user1) throw "Usuario no encontrado";
      else {
        if (bcrypt.compareSync(password, user1.password)) {
          const usuario = {id: user1.id, fullName: `${user1.name} ${user1.lastname}`, data: user1.rolId}
          let token = jwt.sign( {usuario}, secret, { expiresIn: "7d" });
          return token;
        } else {
          throw "Password inválido";
        }
      }
    } catch (err) {
      console.log(err)
      throw err;
    }
  }

  static async userUpdate(req, next) {
    const { id } = req.params;
    try {
      const user = await user.update(req.body, {
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
