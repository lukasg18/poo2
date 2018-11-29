import {
  Get,
  Controller,
  Res,
  HttpStatus,
  Param,
  Post,
  Body,
} from '@nestjs/common';
import { RelatorioService } from '../service/relatorio.service';

@Controller()
export class RelatorioController {
  constructor(private readonly medicamentoService: RelatorioService) {}

  @Get('/relatorio/1')
  async SumMedicamentosEstoque(@Res() res, @Param() id) {
    try {
      let mp: RelatorioService[] = await this.medicamentoService.SumMedicamentosEstoque();
      if (mp != undefined) {
        res.status(HttpStatus.OK).send(mp);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum mp encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Get('/relatorio/2')
  async CountMedicamentosEstoque(@Res() res, @Param() id) {
    try {
      let mp: RelatorioService[] = await this.medicamentoService.CountMedicamentosEstoque();
      if (mp != undefined) {
        res.status(HttpStatus.OK).send(mp);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum mp encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

}
