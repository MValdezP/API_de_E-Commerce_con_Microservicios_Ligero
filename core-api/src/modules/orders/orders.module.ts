import { Module } from '@nestjs/common';
import { OrdersController } from './infrastructure/orders.controller';

@Module({
  controllers: [OrdersController],
  providers: [],
})
export class OrdersModule {}
