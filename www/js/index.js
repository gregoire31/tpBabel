
var app = {

    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function () {
        this.receivedEvent('deviceready');
        

       this.verificationConnexion();
        
        
        $('#start').click(function(){
            function startRecognition(){
                window.plugins.speechRecognition.startListening(function(result) {
                    monString = result[0];
                    var montexteTraduit;
                    var maLangueTTS;

                    var malangue = document.getElementById("select").value;
                    if(malangue == "en"){
                        maLangueTTS = "en-GB"
                    }
                    if(malangue == "es"){
                        maLangueTTS = "es-ES"
                    }
                    if(malangue == "sv"){
                        maLangueTTS = "sv-SE"
                    }
                    if(malangue == "ru"){
                        maLangueTTS = "ru-RU"
                    }
                    if(malangue == "it"){
                        maLangueTTS = "it-IT"
                    }
                    if(malangue == "nl"){
                        maLangueTTS = "nl-NL"
                    }
                    if(malangue == "pt"){
                        maLangueTTS = "pt-PT"
                    }

                    var data = { 'montexte': monString , 'malangue': malangue};

                    $.ajax({
                		url : 'http://192.168.0.16:8080', // La ressource ciblée
                		type : 'POST', // Le type de la requête HTTP.
                   		data : data,/*'montexte=' + monString + 'malangue'*/
                		
		                complete: function() {
		                  //called when complete
		                  console.log('process complete');
		                },
		
		                success: function(data) {
		                  console.log(data);
		                  montexteTraduit = data;
		                  console.log('process sucess');
		                  $('#resultat').html(montexteTraduit);
		            		TTS.speak({
                    		    text: montexteTraduit,
                    		    locale: maLangueTTS,
                    		    rate: 0.75
                    		}, function () {
                    		    console.log('success');
                    		}, function (reason) {
                    		    console.log(reason);
                    		});
		               },
		
		                error: function() {
		                  console.log('process error');
		                }
		            });	
                    
                    
                    
                }, function(err){
                    console.error(err);
                }, {
                    language: "fr-FR",
                    showPartial: true,
                    showPopup:true
                });
            }
            window.plugins.speechRecognition.stopListening(function(){
                // No more recognition
            }, function(err){
                console.log(err);
            });

            

            // Verify if recognition is available
            window.plugins.speechRecognition.isRecognitionAvailable(function(available){
                if(!available){
                    console.log("Sorry, not available");
                }

                // Check if has permission to use the microphone
                window.plugins.speechRecognition.hasPermission(function (isGranted){
                    if(isGranted){
                        startRecognition();
                    }else{
                        // Request the permission
                        window.plugins.speechRecognition.requestPermission(function (){
                            // Request accepted, start recognition
                            startRecognition();
                        }, function (err){
                            console.log(err);
                        });
                    }
                }, function(err){
                    console.log(err);
                });
            }, function(err){
                console.log(err);
            });           
        });
    },

    verificationConnexion: function () {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';
        if (states[networkState] != "Unknown connection" && states[networkState] != "No network connection") {
            alert("vous êtes connectés à internet.");
        }
        else{
            alert("vous n'êtes pas connecté à internet.");
        }
    },

    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    },
    

};
app.initialize();