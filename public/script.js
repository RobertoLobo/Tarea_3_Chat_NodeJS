var socket = io();
var mensajes = document.getElementById('mensajes');
//var formulario = document.getElementById('formulario');
var entrada = document.getElementById('entrada');
var boton = document.getElementById('enviar');

boton.addEventListener('click', function() {
if (entrada.value) {
    socket.emit('chat mensaje', {
        entrada: entrada.value,
        usuario: usuario.value
    });
    entrada.value = '';
}
});
socket.on('chat mensaje', function(msg){
    mensajes.innerHTML += '<p><strong>' + msg.usuario + ': </strong>' + msg.entrada + '</p>';
});