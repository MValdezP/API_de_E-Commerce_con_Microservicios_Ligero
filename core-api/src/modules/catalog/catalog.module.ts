import { Module } from '@nestjs/common';
import { CatalogController } from './infrastructure/catalog.controller';

@Module({
  controllers: [CatalogController],
  providers: [],
})
export class CatalogModule {}
