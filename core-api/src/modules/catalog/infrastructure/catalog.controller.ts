import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Catalog')
@Controller('catalog')
export class CatalogController {
  @Get('products')
  @ApiOperation({ summary: 'Get all products' })
  getProducts() {
    return [{ id: 1, name: 'Product 1', price: 100 }];
  }
}
