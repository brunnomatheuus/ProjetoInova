'use strict';


module.exports = function(app) {


    app.distinctObjetivo = function(id, cb) {
        
        var db = app.dataSources.db;
        var obj = app.models.objetivoOKR;


        db.app.models.objetivoOKR.distinct("ano"), function(err, qtd) { 
          cb(null, qtd);
        };
    }

    app.remoteMethod(
        'distinctObjetivo',
        {
            http: {verb: 'get'},
            description: "Get distinct objetivos por anos.",
            returns: {arg: 'distinctObjetivo', type: 'Object', root: true}
        }
    );

    //BOTAR CONSULTA DISTINCT PARA FUNCIONAR
};
