// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/*var dsConfig = require('../datasources.json');
var path = require('path');*/
const axios = require('axios');

module.exports = function(app) {
  // var User = app.models.user;

  // //login page
  // app.get('/', function(req, res) {
  //   res.render('login');
  // });


  // //log a user in
  // app.post('/home', function(req, res) {

  //   User.login({username: req.body.username, password: req.body.password}, 'user', 
  //     function (err, token) {
  //       if (err) {
  //         res.render('response', { //render view named 'response.ejs'
  //           title: 'Login failed',
  //           content: err,
  //           redirectTo: '/',
  //           redirectToLinkText: 'Try again'
  //         });
  //         return;
  //       }

  //       /*res.render('home', { //login user and render 'home' view
  //         username: req.body.username,
  //         accessToken: token.id
  //       });*/


  //       app.models.user.findOne({
  //         where: {
  //           username: req.body.username
  //         }}, function(err, user) {
  //           if (err) return;
  //           if(user.realm == 'adm'){
  //             app.models.Administrador.findOne({
  //               where: {
  //                 id: user.id
  //               }}, function(err, adm) {
  //                 if (err) return;
  //                 res.render('homeAdm', { //login user and render 'home' view
  //                   username: req.body.username,
  //                   accessToken: token.id,
  //                   cargo: adm.cargo
  //                 });
  //             })
  //           }
  //           else if(user.realm == 'emp'){
  //             app.models.empresa.findOne({
  //               where: {
  //                 id: user.id
  //               }}, function(err, emp) {
  //                 if (err) return;
  //                 res.render('homeEmpresa', { //login user and render 'home' view
  //                   username: req.body.username,
  //                   accessToken: token.id,
  //                   nome: emp.nome
  //                 });
  //             })
  //           }
  //           else if(user.realm == 'assessor'){
  //             app.models.assessor.findOne({
  //               where: {
  //                 id: user.id
  //               }}, function(err, assessor) {
  //                 if (err) return;
  //                 res.render('homeAssessor', { //login user and render 'home' view
  //                   username: req.body.username,
  //                   accessToken: token.id,
  //                   cargo: assessor.cargo
  //                 });
  //             })
  //           }
  //       });


        
  //   });
  // });

  // app.post('/cadastro', function(req, res) {
  //   User.create({username: req.body.username, email: req.body.email, password: req.body.password, realm: req.body.tipo},
  //     function(err, userInstance) {
  //     if (err) {
  //       res.render('response', { //render view named 'response.ejs'
  //         title: 'Sign up failed',
  //         content: err,
  //         redirectTo: '/',
  //         redirectToLinkText: 'Try again'
  //       });
  //       return;
  //     }
  //     const data = {
  //       id: userInstance.id
  //     }
    

  //     if(req.body.tipo == 'adm') {
  //       axios.post('http://localhost:3000/api/Administradores', data).then(function (response) {
  //       })
  //       .catch(function (error) {
  //         res.render('response', { //render view named 'response.ejs'
  //         title: 'Sign up failed',
  //         content: error,
  //         redirectTo: '/',
  //         redirectToLinkText: 'Try again'
  //       });
  //       return;
  //       });
  //     }

  //     else if(req.body.tipo == 'assessor'){
  //       axios.post('http://localhost:3000/api/Assessores', data).then(function (response) {
  //       })
  //       .catch(function (error) {
  //         res.render('response', { //render view named 'response.ejs'
  //         title: 'Sign up failed',
  //         content: error,
  //         redirectTo: '/',
  //         redirectToLinkText: 'Try again'
  //       });
  //       return;
  //       });
  //     }

  //     else if(req.body.tipo == 'emp'){
  //       axios.post('http://localhost:3000/api/Empresas', data).then(function (response) {
  //       })
  //       .catch(function (error) {
  //         res.render('response', { //render view named 'response.ejs'
  //         title: 'Sign up failed',
  //         content: error,
  //         redirectTo: '/',
  //         redirectToLinkText: 'Try again'
  //       });
  //       return;
  //       });
  //     }
  //     res.render('login');
  //   });
  // });

  // //log a user out
  // app.get('/logout', function(req, res, next) {
  //   if (!req.accessToken) return res.sendStatus(401);
  //   User.logout(req.accessToken.id, function(err) {
  //     if (err) return next(err);
  //     res.redirect('/');
  //   });
  // });
};