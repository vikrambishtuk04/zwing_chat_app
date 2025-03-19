import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    WebSocketServer,
  } from '@nestjs/websockets';
  import { Logger } from '@nestjs/common';
  import { Server, Socket as SocketIOClient } from 'socket.io';
  
  @WebSocketGateway({ cors: {
    origin: ['http://192.168.0.245:5500', 'http://127.0.0.1:5500', 'http://127.0.0.1:5500'], // Add both your friend's IP and your local IP address
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,  // Allow cookies (if needed)
  }, })  // Allow connections from any origin (adjust as necessary)
  export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;
    private logger: Logger = new Logger('ChatGateway');
    private messages: {clienrId:string, message:string}[] = [];
    // Handle new connections
    handleConnection(client: SocketIOClient) {
      this.logger.log(`Client connected: ${client.id}`);
    }
  
    // Handle disconnections
    handleDisconnect(client: SocketIOClient) {
      this.logger.log(`Client disconnected: ${client.id}`);
    }
  
    // Listen for chat messages from clients
    @SubscribeMessage('chatMessage')
    handleChatMessage(@MessageBody() message: string, client: SocketIOClient): void {
      this.logger.log(`Client ${client.id} sent message: ${message}`);
      this.server.emit('chatMessage', { message, clientId: client.id });
    }

    @SubscribeMessage('fecthMessage')
    handleFetchMessage(client:SocketIOClient): void {
      client.emit('all message', this.messages);
    }
  }
  