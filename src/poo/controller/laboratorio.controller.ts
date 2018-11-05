import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { LaboratorioService } from 'poo/service/laboratorio.service';
import { UpdateDateColumn } from 'typeorm';
import { Municipio } from 'poo/model/municipio.entity';
import { Laboratorio } from 'poo/model/laboratorio.entity';

@Controller()
export class MunicipioController {
  constructor(private readonly laboratorioService: LaboratorioService) {}

  @Get('/laboratorio')
  readAll():any {
    return this.laboratorioService.readAll();
  }

  @Get('/laboratorio/:id')
  readOne(@Param() param ):any {
    return this.laboratorioService.readOne(param.id);
  }

  @Post('/laboratorio')
  Create(@Body() body):any {
    return this.laboratorioService.Create(body);
  }

  @Post('/laboratorio/update')
  public updateOne(@Body() body: Laboratorio) {
    return this.laboratorioService.Update(body);
  }
}
