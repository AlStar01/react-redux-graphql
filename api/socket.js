let io = require('socket.io')();

io.on('connection', (socket) => {
    console.log('A user connected');
});

module.exports = io;