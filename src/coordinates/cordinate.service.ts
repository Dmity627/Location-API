import {HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import * as geoip from 'geoip-lite';
import { LocationInfo } from './interfaces/location-info.interface';

@Injectable()
export class CoordinatesService {
  getLocationById(ip: string): LocationInfo {
    try {
      const geo = geoip.lookup(ip);
      if (!geo) {
        throw new NotFoundException('Not found');
      }
      return {
        lat: geo.ll[0],
        lng: geo.ll[1],
        country: geo.country,
        city: geo.city
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Internal server error');
    }
  }
}
