import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { MunicipioService } from '../service/municipio.service';
import { Municipio } from '../model/municipio.entity';


@Controller()
export class MunicipioController {
  constructor(private readonly municipioService: MunicipioService) {}

  @Get('/municipio')
  readAll():any {
    return this.municipioService.readAll();
  }

  @Get('/municipio/:id')
  readOne(@Param() param ):any {
    return this.municipioService.readOne(param.id);
  }

  @Post('/municipio')
  Create(@Body() body):any {
    return this.municipioService.Create(body);
  }

  @Post('/municipio/update')
  public updateOne(@Body() body: Municipio) {
    return this.municipioService.Update(body);
  }

  // @Post('/municipio/remove')
  // public removeOne(@Body() body:Municipio) {
  //   return this.municipioService.Drop(body);
  // }
}
