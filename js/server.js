var express = require('express');
var app = express();

// Requiring that function that you exported
var twilio = require('/Users/hiplandic/developer/mania.fm/js/whatsapp.js');


// Creating a controller for the get request: localhost:8081/send/sms
app.get('/send/whatsapp', function (req, res) {
   twilio(function(err, message) {
     if (err) res.send(err);
     res.send('Message sent: ' + message);
   });
});

// Creating an HTTP server that listens on port 8081 (localhost:8081)
var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

});