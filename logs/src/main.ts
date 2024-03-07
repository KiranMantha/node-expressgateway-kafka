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
          groupId: KafkaConsumers.LOGS_CONSUMER
        }
      }
    }
  );
  app.listen();
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3010);
}
bootstrap();
