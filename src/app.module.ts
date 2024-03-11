import { Module } from '@nestjs/common';
import { CordinateModule } from './coordinates/cordinate.module';

@Module({
  imports: [CordinateModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
