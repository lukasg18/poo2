import { Get, Controller } from '@nestjs/common';
import { TitularService } from '../service/titular.service';


@Controller()
export class TitularController {
  constructor(private readonly titularService: TitularService) {}

  @Get('/titular')
  root():any {
    return this.titularService.findAll();
  }
}
