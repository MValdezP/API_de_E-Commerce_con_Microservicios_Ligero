import { Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  @Post()
  @ApiOperation({ summary: 'Create new order' })
  createOrder() {
    return { id: 1, status: 'PENDING' };
  }
}
