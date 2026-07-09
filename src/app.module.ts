import { Module } from '@nestjs/common';
import { NotificationsGateway } from './ws/notifications.gateway';
import { NotificationsController } from './notifications/notifications.controller';
import { NotificationsService } from './notifications/notifications.service';
@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [NotificationsGateway, NotificationsService],
})
export class AppModule {}
