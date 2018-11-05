import { Injectable, Inject } from '@nestjs/common';
import { Solicitacao } from '../model/solicitacao.entity';

@Injectable()
export class SolicitacaoService{
  async readAll(): Promise<Solicitacao[] | any> {
    return Solicitacao.find();
  }

  async readOne(id: number): Promise<Solicitacao | any> {
    return Solicitacao.findOne({ idsolicitacao: id });
  }

}
