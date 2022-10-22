const nodemailer = require('nodemailer');
require('dotenv').config();

const infoByMail= (mensajeString, email) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.E_MAIL,
      pass: process.env.E_CLAVE,
    },
  });
  const emailConfig = {
    from: process.env.E_MAIL,
    to: `${email}`,
    subject: 'Enviado desde el equipo de ventas de Sativa & Co',
    html: `<b>${mensajeString}</b>`,
  };
  transporter.sendMail(emailConfig, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
    }
  });
};

module.exports={infoByMail}