import { Get, Controller, Post, Body, Param } from '@nestjs/common';
import { SexoService } from '../service/sexo.service';
// import { Sexo } from '../model/Sexo/sexo.entity';


@Controller()
export class SexoController {
  // constructor(private readonly sexoService: SexoService) {}

  // @Get('/sexo')
  // public getAll() {
  //   return this.sexoService.findAll();
  // }

  // @Get('/sexo/:id')
  // public getOne(@Param() id: number) {
  //   return this.sexoService.findOne(id);
  // }

  // @Post('/sexo')
  // public createOne(@Body() body: Sexo) {
  //   return this.sexoService.Create(body);
  // }

  // @Post('/sexo/remove')
  // public removeOne(@Body() body: Sexo) {
  //   return this.sexoService.Remove(body);
  // }

  // @Post('/sexo/update')
  // public updateOne(@Body() body: Sexo) {
  //   return this.sexoService.Update(body);
  // }
  
}
