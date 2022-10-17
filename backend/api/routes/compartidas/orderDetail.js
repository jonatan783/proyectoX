const express = require('express');
const router = express.Router();
const orderDetailController = require('../../controllers/orderDetailController');
// const nodemailer = require('nodemailer');

router.post('/createOrderDetail', orderDetailController.newOrden); // Agregar orden de compra
router.put('/modifyStatus/:id', orderDetailController.OrderUpdate); // Actualizar Orden de compra
router.get('/historial/:UserId', orderDetailController.orderGetAll); // Historial de ordenes
router.get('/getorder/:id', orderDetailController.orderGetOne); // Buscar orden por Id

module.exports = router;

///  contraseña de aplicacion para google :
/// juev vuxd mobn xisi
// router.post('/sendEmail', (req, res) => {
//   const { email } = req.body;
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//       user: 'sativayco@gmail.com',
//       pass: 'juevvuxdmobnxisi',
//     },
//   });
//   const emailConfig = {
//     from: 'sativayco@gmail.com',
//     to: `${email}`,
//     subject: 'Enviado desde el equipo de desarrollo de Sativa & Co',
//     html: '<b>Su compra ha sido realizada</b>',
//   };
//   transporter.sendMail(emailConfig, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Server is ready to take our messages');
//       res.status(200).json(emailConfig);
//     }
//   });
// });