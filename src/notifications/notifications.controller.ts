import { Body, Controller, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('notify')
  notify(@Body() body: { title?: string; body?: string }) {
    this.notificationsService.send({
      title: body?.title ?? 'Notification',
      body: body?.body ?? 'Hello',
    });
  }
}
