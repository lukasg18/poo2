import { Get, Controller } from '@nestjs/common';
import { TitularService } from '../service/titular.service';
import { Titular } from '../model/titular.entity';


@Controller()
export class TitularController {
  constructor(private readonly titularService: TitularService) {}

  @Get('/titular')
  root():any {
    return this.titularService.readAll();
  }
}
