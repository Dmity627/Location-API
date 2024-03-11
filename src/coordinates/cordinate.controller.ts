import { Controller, Get, Param, Query, UsePipes } from '@nestjs/common';
import { CoordinatesService } from './cordinate.service';
import { IpValidationPipe } from 'src/pipes/ip-validation.pipe';
import { LocationInfo } from './interfaces/location-info.interface';

@Controller('cordinate')
export class CoordinatesController {
  constructor (private readonly  cordinateService: CoordinatesService) {}

  @Get()
  @UsePipes(new IpValidationPipe())
  getLocationById(@Query('ip') ip: string): LocationInfo {
    return this.cordinateService.getLocationById(ip);
  }
}
