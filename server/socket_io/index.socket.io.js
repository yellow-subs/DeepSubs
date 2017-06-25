const socketIo = require('socket.io');

const user = {};

module.exports = (server) => {
  const io = socketIo(server);
  io.on('connect', (socket) => {
    console.log('client connect on ID', socket.id)
    socket.on('join-room', (roomId) => {
      user.roomId = roomId;
      socket.join(user.roomId);
    });

    socket.on('board-update', (newBoard) => {
      socket.broadcast.to(user.roomId).emit('board-update', newBoard);
    });
  });
};
