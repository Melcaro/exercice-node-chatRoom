import socketIOClient from 'socket.io-client';

const socket = socketIOClient('http://localhost:5000');

export const sendAMessageToTheRoom = message => {
  socket.emit('message', message);
};

export const printUsersMessage = cb => {
  socket.on('message', cb);
};
