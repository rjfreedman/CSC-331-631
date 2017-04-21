// loading necessary modules
var express = require('express');
var httpModule = require('http');

// Create an express app
var app = express();

var http = httpModule.Server(app);

// Tells app that pictures, etc are located in folder
// assets
app.use(express.static('assets'));

//BEGIN added code
//Indicate that individual files can be found in the directory.
//This is needed for accessing the data files via GET once deployed to Heroku.
app.use('/', express.static(__dirname));
//END added code

function responder(req, res) {
  // Sending a file to the user's browser
  res.sendFile(__dirname + '/index.html');
  // print message in the server side console
  console.log('got a request');
};

// Get request to / is given to responder function
app.get('/', responder);

function portListener() {
    console.log('Listening on localhost ' + port);
};

var port = process.env.PORT ||  3000;
http.listen(port, portListener);
