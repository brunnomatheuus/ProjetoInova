module.exports = function(app) {
    var Pessoa = app.models.pessoa;

    //log a user in
    app.post('/home', function(req, res) {

        Pessoa.login({username: req.body.username, password: req.body.password}, 'user', 
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

            Pessoa.findOne({
            where: {
                username: req.body.username
            }}, function(err, user) {
                if (err){
                console.log(err);
                return;
                }
                const data = {
                    nome: user.nome,
                    username: req.body.username,
                    accessToken: token.id
                }
                if(user.tipo == 'adm'){
                res.render('homeAdm', data);
                }
                else if(user.tipo == 'emp'){
                res.render('homeEmpresa', data);
                }
                else if(user.tipo == 'assessor'){
                res.render('homeAssessor', data);
                }
            });
        });
    });


    //log a user out
    app.get('/logout', function(req, res, next) {
        if (!req.accessToken) return res.sendStatus(401);
        Pessoa.logout(req.accessToken.id, function(err) {
            if (err) return next(err);
            res.redirect('/');
        });
    });
}