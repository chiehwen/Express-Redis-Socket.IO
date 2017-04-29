// Module dependencies
const express = require('express');
const redis = require('redis');
const socketio = require('socket.io');

// Configuration
const Configs = require('./configs');

// Initial Express
const app = express();

// Start the server and listening
const server = app.listen(Configs.base.server.port, () => {
    console.log('Server listening at port %d', Configs.base.server.port);
});

// Create a Socket.io server
const io = socketio(server);

app.use(express.static('static'));

// Connect to redis
const redisClient = redis.createClient(Configs.database.redis.port, Configs.database.redis.host);
const publishClient = redis.createClient(Configs.database.redis.port, Configs.database.redis.host);

// Handle connections
io.on('connection', (socket) => {
    console.log('A socket is now open.');
    socket.on('disconnect', () => console.log('Client disconnected'));
});