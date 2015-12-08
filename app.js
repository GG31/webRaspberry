//Install:
//nodejs
//npm install express
//npm install node-gpio
//var gpio = require('node-gpio');
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(8080);
app.use('/', express.static(__dirname + '/'));
/*
var app = require('http').createServer();
var io = require('socket.io');
io = io.listen(app);*/
var n = 10;
io.sockets.on('connection', function (socket) {
     // Mes événements lorsque le client est connecté !
   socket.on('btn1', function(value) {
      //socket.emit('user joined', {username:nickname, numUsers:1});
      console.log("btn1 has received " + value);
      socket.emit('btn1 shutdown')
   });
});

app.get('/', function (req, res) {  
   res.send(index.html);
});

console.log('Live Chat App running at http://localhost:8080');
