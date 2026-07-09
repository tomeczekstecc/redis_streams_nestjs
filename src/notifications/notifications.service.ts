import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import {
  NotificationsGateway,
  Notification,
} from '../ws/notifications.gateway';

@Injectable()
export class NotificationsService {
  constructor(private readonly gateway: NotificationsGateway) {}
  send(input: { title: string; body: string }) {
    const notification: Notification = {
      id: randomUUID(),
      title: input.title,
      body: input.body,
      ts: Date.now(),
    };
    this.gateway.broadcast(notification);
  }
}
