const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const Router = require('./app/router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('',Router);

app.set('view engine','pug');

const socket = require('./app/sockets')(io);

server.listen(1998, function(){
    console.log('Servidor corriendo en el puerto 1998');
});