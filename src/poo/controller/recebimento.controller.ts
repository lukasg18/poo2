import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { RecebimentoService } from 'poo/service/recebimento.service';
import { Recebimento } from 'poo/model/recebimento.entity';

@Controller()
export class RecebimentoController {
  constructor(private readonly recebService: RecebimentoService) {}

  @Get('/receb')
  readAll():any {
    return this.recebService.readAll();
  }

  @Get('/receb/:id')
  readOne(@Param() param ):any {
    return this.recebService.readOne(param.id);
  }

  @Post('/receb')
  Create(@Body() body):any {
    return this.recebService.Create(body);
  }

  @Post('/receb/update')
  public updateOne(@Body() body: Recebimento) {
    return this.recebService.Update(body);
  }
}
