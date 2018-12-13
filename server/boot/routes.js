// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/*var dsConfig = require('../datasources.json');
var path = require('path');*/

module.exports = function(app) {
  const axios = require('axios');

  //login page
  app.get('/', function(req, res) {
    res.render('login');
  });

  //login page
  app.get('/cadastroEdital', function(req, res) {
    res.render('cadastroEdital');
  });

  app.post('/edital', function(req, res){
    const data = {
      prazo: req.body.prazo,
      tipoEdital: req.body.tipo,
      numeroEdital: req.body.numero,
      valores: req.body.valor
    }
    
    axios.post('http://localhost:3000/api/editais', data).then(function (response) {
    })
    .catch(function (error) {
      res.render('response', { //render view named 'response.ejs'
      title: 'Sign up failed',
      content: error,
      redirectTo: '/',
      redirectToLinkText: 'Try again'
      });
      return;
    });
  });

  /*app.post('/cadastro', function(req, res) {
    User.create({username: req.body.username, email: req.body.email, password: req.body.password, realm: req.body.tipo},
      function(err, userInstance) {
      if (err) {
        res.render('response', { //render view named 'response.ejs'
          title: 'Sign up failed',
          content: err,
          redirectTo: '/',
          redirectToLinkText: 'Try again'
        });
        return;
      }
      const data = {
        id: userInstance.id
      }
    

      if(req.body.tipo == 'adm') {
        axios.post('http://localhost:3000/api/Administradores', data).then(function (response) {
        })
        .catch(function (error) {
          res.render('response', { //render view named 'response.ejs'
          title: 'Sign up failed',
          content: error,
          redirectTo: '/',
          redirectToLinkText: 'Try again'
        });
        return;
        });
      }

      else if(req.body.tipo == 'assessor'){
        axios.post('http://localhost:3000/api/Assessores', data).then(function (response) {
        })
        .catch(function (error) {
          res.render('response', { //render view named 'response.ejs'
          title: 'Sign up failed',
          content: error,
          redirectTo: '/',
          redirectToLinkText: 'Try again'
        });
        return;
        });
      }

      else if(req.body.tipo == 'emp'){
        axios.post('http://localhost:3000/api/Empresas', data).then(function (response) {
        })
        .catch(function (error) {
          res.render('response', { //render view named 'response.ejs'
          title: 'Sign up failed',
          content: error,
          redirectTo: '/',
          redirectToLinkText: 'Try again'
        });
        return;
        });
      }
      res.render('login');
    });
  });*/

  
};