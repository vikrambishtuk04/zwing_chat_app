import { Server } from 'socket.io';
import * as http from 'http';

const server = http.createServer();
const io = new Server(server, { cors: { origin: '*' } }); // Allow all origins for testing

let messages: Array<{ message: string; clientId: string }> = [];

io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`);

  // Send all previous messages to the new client when they connect
  socket.emit('allMessages', messages);

  // Listen for chat messages from clients
  socket.on('chatMessage', (data) => {
    console.log("message", data.message, 'from client', data.clientId);
    
    // Store the message in the messages array
    messages.push(data);

    // Broadcast the message to all connected clients
    io.emit('chatMessage', data);
  });

  // Handle 'fetchMessages' event to send all stored messages to the client
  socket.on('fetchMessages', () => {
    // Send all messages to the client
    socket.emit('allMessages', messages);
  });

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
