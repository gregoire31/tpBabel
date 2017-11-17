//var valeur = document.getElementById("vitesse-affichage").innerHTML;
//$( "#resultat" ).html() 
//console.log(resultat)

//$('resultat').bind("DOMSubtreeModified",function(){
//  console.log('changed');
//});
//(function(){
//    var elt = document.getElementById('resultat');
//    var monTexte = elt.innerText || elt.textContent;
//    console.log(monTexte)
//})();
//var elt = document.getElementById("resultat").innerHTML; 
//console.log(elt)

//var traduit = document.getElementById("resultat")
//console.log(traduit)
//var texteTraduit="";
/*var express = require('express');

// serveur html
var server = express();
server.get('/index.js', function(request, response) {
  var p1 = request.param("p1"); 
  console.log(p1);
  response.sendFile( __dirname  + '/index.js');
});*/

/*const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
})*/
//Import the necessary libraries/declare the necessary objects
var express = require("express");
var myParser = require("body-parser");
var app = express();

  app.use(myParser.urlencoded({extended : true}));
  app.post("/", function(request, response) {
      console.log(request.body); //This prints the JSON document received (if it is a JSON document)
});
 
 //Start the server and make it listen for connections on port 8080
 
 app.listen(8080);

/*const http = require('http')	
var bodyParser = require("body-parser");

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});
server.use(bodyParser.urlencoded({ extended: true }));
server.listen(8080);
 
server.post('/post.html', function(request, response) {
  var p1 = request.body.p1; 
  console.log("p1=" + p1);
});*/

//var server = http.createServer()
//var texteTraduit;
//server.on('request', function(res,req){
//	const translate = require('google-translate-api');
//	console.log(req.body.textToTranslate);
//	translate(req.body.textToTranslate, {to: 'en'}).then(res => {
//	    console.log (res.text);
//	    texteTraduit = res.text;
////	    $('#resultatTraduit').html(texteTraduit)
//	    const app = require('express')
//	    var bodyParser = require('body-parser')
//	    app.use( bodyParser.json() );       // to support JSON-encoded bodies
//	    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//	      extended: true
//	    })); 
//	}).catch(err => {
//	    console.error(err);
//	});
//	req.end(texteTraduit)
//	
//})

