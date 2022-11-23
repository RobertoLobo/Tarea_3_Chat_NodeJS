var express = require('express');
var app = express();
var servidor = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(servidor);
//var socket = require('socket.io').listen(servidor);
//var io = socket(server)
//servidor.listen(process.env.PORT, process.env.IP);
servidor.listen(3500, () => {
    console.log('Servidor en *:3500');
});
app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(__dirname + 'public/index.html')
});
io.on('connection', (socket) => {
    console.log('Usuario en Linea', socket.id);
    socket.broadcast.emit('Bien-Venido');
    socket.on('chat mensaje', (msg) => {
        io.emit('chat mensaje', msg);
    });
    socket.on('disconnect', () => {
      console.log('Usuario Desconectado');
    });
});