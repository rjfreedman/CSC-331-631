// loading necessary modules
var express = require('express');
var httpModule = require('http');

// Create an express app
var app = express();

var http = httpModule.Server(app);

// Tells app that pictures, etc are located in folder
// assets
app.use(express.static('assets'));

//added begin:
//app.use('/data',express.static(path.join(__dirname, 'public/data')));
app.use('/', express.static(__dirname));
//added end

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
