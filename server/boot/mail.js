// var nodemailer = require('nodemailer');

// // Vamos criar a conta que irá mandar os e-mails
// var conta = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'brunomatheuslc2903@gmail.com', // Seu usuário no Gmail
//         pass: '200824040050' // A senha da sua conta no Gmail :-)
//     }
// });

// const mailOptions = {
//     from: 'Inova Metrópole <no-reply@imd.ufrn.com>', // Quem está mandando
//     to: 'Bruno C <brunomatheuslc@hotmail.com>', // Para quem o e-mail deve chegar
//     subject: 'Estou testando seu gist', // O assunto
//     html: '<strong>Oi Bruno!</strong><p>Estou testando seu gist para enviar e-mails, amo você!</p>', // O HTMl do nosso e-mail
// };

// conta.sendMail(mailOptions, function(err){
//     if(err)
//         throw err;

//     console.log('E-mail enviado!');
// });