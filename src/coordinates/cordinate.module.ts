import { Module } from '@nestjs/common';
import { CoordinatesService } from './cordinate.service';
import { CoordinatesController } from './cordinate.controller';

@Module({
  controllers: [CoordinatesController],
  providers: [CoordinatesService],
})
export class CordinateModule {}
