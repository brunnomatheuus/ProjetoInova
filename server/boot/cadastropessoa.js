// const axios = require('axios');

// module.exports = function(app) {
//     var Pessoa = app.models.pessoa;
//     var Role = app.models.Role;
//     var RoleMapping = app.models.RoleMapping;

//     app.post('/cadastro', function(req, res) {
//         Pessoa.create({nome: req.body.nome, username: req.body.username, email: req.body.email, password: req.body.password, tipo: req.body.tipo},
//         function(err, pessoaInstance) {
//         if (err) {
//             res.render('response', { //render view named 'response.ejs'
//             title: 'Sign up failed',
//             content: err,
//             redirectTo: '/',
//             redirectToLinkText: 'Try again'
//             });
//             return;
//         }

//         if(pessoaInstance.tipo == 'adm')
//         Role.create(
//             {name: 'admin'},
//             function(err, role) {
//                 if (err) {
//                     console.log(err);
//                     return;
//                 }

//                 //make admin an admin
//                 role.principals.create({
//                         principalType: RoleMapping.pessoa,
//                         principalId: pessoaInstance.id
//                     },
//                     function (err, principal) {
//                         if (err) {
//                             console.log(err);
//                             return;
//                         }
//                         console.log(principal);
//                     });
//             }
//         );

//         res.render('login');
//         });
//     });
// }