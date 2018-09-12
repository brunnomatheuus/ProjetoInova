// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var dsConfig = require('../datasources.json');
var path = require('path');

module.exports = function(app) {
  var User = app.models.user;

  //login page
  app.get('/', function(req, res) {
    res.render('login');
  });

  //log a user in
  app.post('/login', function(req, res) {

    User.login({username: req.body.username, password: req.body.password}, 'user', 
      function (err, token) {
        if (err) {
          res.render('response', { //render view named 'response.ejs'
            title: 'Login failed',
            content: err,
            redirectTo: '/',
            redirectToLinkText: 'Try again'
          });
          return;
        }
    
        res.render('home', { //login user and render 'home' view
          username: req.body.username,
          accessToken: token.id
        });
    });
  });

  //log a user out
  app.get('/logout', function(req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);
    User.logout(req.accessToken.id, function(err) {
      if (err) return next(err);
      res.redirect('/');
    });
  });
};
