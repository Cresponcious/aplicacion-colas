// Comando para establecer la conexion

var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', () => {

    console.log('Conectado al servidor');

});

socket.on('disconnect', () => {

    console.log('Desonectado del servidor');

});

socket.on('estadoActual', (resp) => {

    console.log(resp);
    label.text(resp.actual);

});


$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);
    });
})