var socket = io();
var mensajes = document.getElementById('mensajes');
var formulario = document.getElementById('formulario');
var entrada = document.getElementById('entrada');

formulario.addEventListener('submit', function(e) {
e.preventDefault();
if (entrada.value) {
    socket.emit('chat mensaje', entrada.value);
    entrada.value = '';
}
});

socket.on('chat mensaje', function(msg) {
    var elemento = document.createElement('li');
    elemento.textContent = msg;
    mensajes.appendChild(elemento);
    window.scrollTo(0, document.body.scrollHeight);
});