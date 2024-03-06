import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Event pattern only listen to incoming topic. it won't acknowledge back to emitter.
  // This function will be called for topic 'create_invoice'
  // value will have same signature of 'CreateInvoiceRequest' in api-gateway
  @EventPattern('create_invoice')
  createInvoice(data: {
    value: { userId: string; orderId: string; price: number };
  }) {
    this.appService.createInvoice(data.value);
  }
}
