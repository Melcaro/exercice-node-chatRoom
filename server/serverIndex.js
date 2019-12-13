const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = process.env.PORT || 5000;

io.on('connection', function(socket) {
  socket.on('message', data => {
    console.log('hello');
    socket.broadcast.emit('message', data);
    console.log(data);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
