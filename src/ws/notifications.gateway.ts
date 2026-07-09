import {
  WebSocketGateway,
  OnGatewayConnection,
  WebSocketServer,
} from '@nestjs/websockets';
import type { Server, Socket } from 'socket.io';

export interface Notification {
  id: string;
  title: string;
  body: string;
  ts: number;
}

@WebSocketGateway()
export class NotificationsGateway implements OnGatewayConnection {
  @WebSocketServer()
  server!: Server;
  handleConnection(client: Socket) {
    // Handle the connection logic here
    console.log(`Cliet ${client.id} connected!!!`);
  }

  broadcast(n: Notification) {
    this.server.emit('notification', n);
  }
}
