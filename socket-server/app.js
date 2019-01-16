const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const server = express()
const port = 8080;

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended: true
}))


const app = server.listen(port, function (err, result) {
    console.log('running in port http://localhost:' + port)
})

const io = socketIO.listen(app);
io.on('connection', client => {
    console.log('user connected')
  
    client.on('disconnect', () => {
        console.log('user disconnected')
    })

    client.on('sent-message', function (message) {
        io.sockets.emit('new-message', message)
    })
})