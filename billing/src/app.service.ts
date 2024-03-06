import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createInvoice(createInvoiceRequest: {
    userId: string;
    orderId: string;
    price: number;
  }) {
    console.log(createInvoiceRequest);
  }
}
