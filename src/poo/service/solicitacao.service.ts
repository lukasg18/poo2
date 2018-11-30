import { Injectable, Inject } from '@nestjs/common';
import { Solicitacao } from '../model/solicitacao.entity';

@Injectable()
export class SolicitacaoService{
  async readAll(pag: number): Promise<Solicitacao[] | any> {
    return Solicitacao.createQueryBuilder("solicitacao")
    .select("solicitacao.idsolicitacao, solicitacao.data_hora, solicitacao.quantidademedicamento, solicitacao.estadosolicitacao, titular.idpessoa as idtitular, pessoa.nome as pessoa, titular.numerosus, depedente.idpessoa as iddepedente, medicamentoPosto.datavencimento, medicamentoPosto.idmedicamentoposto, posto.idposto, posto.nome as posto, medicamento.idmedicamento, medicamento.nome as medicamento")
    .innerJoin("solicitacao.titular", "titular")
    .innerJoin("solicitacao.medicamentoPosto", "medicamentoPosto")
    .innerJoin("titular.pessoa", "pessoa")
    .innerJoin("titular.depedente", "depedente")
    .innerJoin("medicamentoPosto.posto", "posto")
    .innerJoin("medicamentoPosto.medicamento", "medicamento")
    .innerJoin("medicamento.laboratorio", "laboratorio")
    .skip(pag * 10)
    .take(10)
    .getRawMany();
  }

  async readOne(id: number): Promise<Solicitacao | any> {
    return Solicitacao.findOne({ idsolicitacao: id });
  }

}
