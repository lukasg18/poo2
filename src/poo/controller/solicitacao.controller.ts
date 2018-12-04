import {
  Get,
  Controller,
  Res,
  HttpStatus,
  Param,
  Post,
  Body,
  UseInterceptors,
  CacheInterceptor
} from '@nestjs/common';
import { Atendente } from '../model/atendente.entity';
import { SolicitacaoService } from '../service/solicitacao.service';

@Controller()
@UseInterceptors(CacheInterceptor)
export class SolicitacaoController {
  constructor(private readonly solicitacaoService: SolicitacaoService) {}
  @Get('/solicitacao/:id')
  async readOne(@Res() res, @Param() id) {
    try {
      let atendente: Atendente[] = await this.solicitacaoService.readOne(id.id);
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }

  @Get('/solicitacao/page/:id')
  async readAll(@Res() res, @Param() id) {
    try {
      let atendente: Atendente[] = await this.solicitacaoService.readAll(id.id);
      if (atendente != undefined) {
        res.status(HttpStatus.OK).send(atendente);
      } else {
        res
          .status(HttpStatus.NOT_FOUND)
          .send('Nenhum atendente encontrado na busca');
      }
    } catch (err) {
      res.status(HttpStatus.BAD_GATEWAY).send(err.message);
    }
  }
}
