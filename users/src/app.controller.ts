import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Message pattern both listen to incoming topic and acknowledge back to emitter.
  // This function respond to topic 'get_user_by_id' and returns the user with matching userId
  @MessagePattern('get_user_by_id')
  getUserById(data: { userId: string }) {
    console.log('users MS:get_user_by_id', data);
    return this.appService.getUserById(data.userId);
  }

  @EventPattern('log_user')
  logUser(data: { userId: string }) {
    console.log('users MS:log_user', data);
  }
}
