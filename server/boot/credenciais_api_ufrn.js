var http = require("https");

var url_base_autenticacao = "autenticacao.info.ufrn.br";
var client_id = "inova-metropole-id";
var client_secret = "segredo";

var url_base = "api.info.ufrn.br";
var versao = "v1";
var x_api_key = "e0T2n0pYlmUscpXgdYLAQpfrdzElEtm2EPiX1Abl";

var options = {
  "method": "POST",
  "hostname": url_base_autenticacao,
  "port": null,
  "path": "/authz-server/oauth/token?client_id=" + client_id + "&client_secret=" + client_secret + "&grant_type=client_credentials"
};

var body;
var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    body = Buffer.concat(chunks);
    var json = JSON.parse(body.toString());
    var token = json['access_token'];
    console.log(body.toString());
    postGru("/gru-restricted/" + versao + "/grus/simples", token);
    //getGru("/gru/" + versao + "/grus", token);
  });
});

req.end();

function getGru(path, token) {
  var http = require("https");

  var options = {
    "method": "GET",
    "hostname": url_base,
    "port": null,
    "path": path,
    "headers": {
      "authorization": "bearer " + token,
      "x-api-key": x_api_key,
    }
  };

  var body;
  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.end();
} 


function postGru(path, token){
    var http = require("https");

    var gru = JSON.stringify({
      "ano-aompetencia": 2018,
      "bairro-pagador": "Lagoa Nova",
      "cep-pagador": "59078970",
      "cidade-pagador": "Natal",
      "codigo-unidade-beneficiaria": "110005",
      "data-vencimento": 10,
      "documento-identificador": 09975323430,
      "id-tipo-arrecadacao": 17,
      "identificador": "1",
      "instrucoes": "Não pagar após o vencimento",
      "logradouro-pagador": "Av. Cap. Mor Gouveia, S/n",
      "mes-competencia": 9,
      "nome-contribuinte": "Bruno",
      "uf-pagador": "RN",
      "valor": 10
    });

    var options = {
        "method": "POST",
        "hostname": url_base,
        "port": null,
        "path": path,
        "headers": {
            "Content-Type": "application/json;charset=UTF-8",
            "authorization": "bearer " + token,
            "x-api-key": x_api_key
        }
    };

    var req = http.request(options, function (res) {

        //console.log('Status: ' + res.statusCode);
        //console.log('Headers: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
          console.log('BODY: ' + chunk)
        });

        res.on("end", function () {
          console.log('No more data in response.');
        });
    });

    req.write(gru);
    req.end();
}