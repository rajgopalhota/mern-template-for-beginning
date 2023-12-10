// src/utils/socket.js
module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('User connected');

        // Handle socket events (e.g., chat, collaborative drawing) here

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
};
