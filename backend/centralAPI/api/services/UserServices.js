const { user, role } = require("../db/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { infoByMail } = require("../utils/infoByMail");
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
      },{
        individualHooks: true, // ver si funciona
      });
      return "usuario creado";
    } catch (err) {
      console.log("error de servicio", err);
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
          const usuario = {
            id: user1.id,
            fullName: `${user1.name} ${user1.lastname}`,
            data: user1.rolId,
          };
          let token = jwt.sign({ usuario }, secret, { expiresIn: "7d" });
          return {token, usuario};
        } else {
          throw "Password inválido";
        }
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async userUpdate(req, next) {
    const { id } = req.params;
    try {
      const user1 = await user.update(req.body, {
        where: {
          id,
        },
        returning: true,
        plain: true,
      });
      return user1;
    } catch (err) {
      throw err;
    }
  }
  static async recovery(req, next) {
    const { email } = req.body;
    const secret = process.env.JWT_PASS;
    const url = process.env.FR_URL;
    try {
      const usuario = await user.findOne({
        where: {
          email,
        },
        attributes: ["id", "name", "lastname", "email"],
      });
      if (!usuario.id) throw new Error("Usuario inexistente");
      let token = jwt.sign({ usuario }, secret, { expiresIn: "600s" });
      infoByMail(`${url}/recovery/${token}`, email);
      await user.update(
        {
          recovery: token,
        },
        {
          where: {
            email,
          },
        }
      );
      return "Hemos enviado un enlace para recuperar su contraseña. El mismo estará activo por 10 minutos desde ahora.";
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async recoverySend(req, next) {
    const { token } = req.params;
    const { password } = req.body;
    try {
      const [updatedRows] = await user.update(
        {
          recovery: null,
          password,
        },
        {
          where: {
            recovery: token,
          },
          individualHooks: true,
        }
      );
      if (!updatedRows) throw new Error("Token inválido");
      return "Has actualizado tu contraseña";
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
module.exports = UserServices;
