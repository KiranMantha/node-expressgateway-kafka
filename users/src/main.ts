import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { KafkaConsumers } from './tokens';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'] // kafka port
        },
        consumer: {
          groupId: KafkaConsumers.USERS_CONSUMER
        }
      }
    }
  );
  app.listen();
}
bootstrap();
