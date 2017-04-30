// loading necessary modules
var express = require('express');
var httpModule = require('http');

// Create an express app
var app = express();

//Use specified module's function with the express app via variable called http...
var http = httpModule.Server(app);

// Tells app that pictures, etc. are located in folder
// assets
app.use(express.static('assets'));

//BEGIN added code
//Indicate that individual files can be found in the directory.
//This is needed for accessing the data files via GET once deployed to Heroku (or another server).
app.use('/', express.static(__dirname));
//END added code

//This function is called in response to a request on the port...
function responder(req, res) {
  // Sending a file to the user's browser
  res.sendFile(__dirname + '/index.html');
  // print message in the server side console
  console.log('got a request');
};

// Get request to / is given to responder function
app.get('/', responder);

//This function is called when listening on designated port...
function portListener() {
    console.log('Listening on localhost ' + port);
};

///Listen on the designated port for a request...
var port = process.env.PORT ||  3000;
http.listen(port, portListener);
