import { Get, Controller, Post, Body } from '@nestjs/common';
import { SexoService } from '../service/sexo.service';
import { Sexo } from '../model/Sexo/sexo.entity';


@Controller()
export class SexoController {
  constructor(private readonly sexoService: SexoService) {}

  @Get('/sexo')
  public GetAll() {
    return this.sexoService.findAll();
  }

  @Post('/sexo')
  public Create(@Body() body: Sexo) {
    return this.sexoService.Create(body);
  }
  
}
