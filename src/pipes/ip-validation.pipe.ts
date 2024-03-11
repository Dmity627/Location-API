import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import * as ipRegex from "ip-regex";

@Injectable()
export class IpValidationPipe implements PipeTransform<string> {
  transform(value: string): string {
    const isIpv4 = ipRegex.v4({exact:true}).test(value);
    const isIpv6 = ipRegex.v6({exact: true}).test(value);

    if (!isIpv4 && !isIpv6) {
      throw new BadRequestException('Invalid IP address format');
    }

    return value;
  }
}
