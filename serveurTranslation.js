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

var express = require("express");
var myParser = require("body-parser");
var app = express();
const translate = require('google-translate-api');

app.use(myParser.urlencoded({extended : true}));

app.post("/", function(request, response) {


    var montexte = request.body.montexte;
    var malangue = request.body.malangue;

    
    translate(montexte, {to: malangue}).then(res => {
  		//console.log(res.text);
  		montexteTraduit = res.text;

  		response.end(montexteTraduit);

	}).catch(err => {
  		console.error(err);
	});

	
});
 //Start the server and make it listen for connections on port 8080
 
 app.listen(8080);



/*var server = http.createServer()
var texteTraduit;
server.on('request', function(res,req){
	const translate = require('google-translate-api');
	console.log(req.body.textToTranslate);
	translate(req.body.textToTranslate, {to: 'en'}).then(res => {
	    console.log (res.text);
	    texteTraduit = res.text;
//	    $('#resultatTraduit').html(texteTraduit)
	    const app = require('express')
	    var bodyParser = require('body-parser')
	    app.use( bodyParser.json() );       // to support JSON-encoded bodies
	    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	      extended: true
	    })); 
	}).catch(err => {
	    console.error(err);
	});
	req.end(texteTraduit)
	
})*/

