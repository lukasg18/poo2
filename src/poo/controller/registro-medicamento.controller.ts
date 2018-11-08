import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { RegMedService } from '../service/registro-medicamento.service';
import { RegistroMedicamento } from '../model/registro-medicamento.entity';

@Controller()
export class RegistroMedicamentoController {
  constructor(private readonly regmedService: RegMedService) {}

  @Get('/regmed')
  readAll():any {
    return this.regmedService.readAll();
  }

  @Get('/regmed/:id')
  readOne(@Param() param ):any {
    return this.regmedService.readOne(param.id);
  }

  @Post('/regmed')
  Create(@Body() body):any {
    return this.regmedService.Create(body);
  }

  @Post('/regmed/update')
  public updateOne(@Body() body: RegistroMedicamento) {
    return this.regmedService.Update(body);
  }
}
