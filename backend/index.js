// index.js
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const socketHandler = require('./utils/socket');
const connectToMongo = require('./config/database')

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
// WebSocket setup
socketHandler(io);
connectToMongo();

// Routes and controllers will be added later

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
