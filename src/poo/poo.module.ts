import { Module } from '@nestjs/common';
import { PessoaService } from './service/pessoa.service';
import { PessoaProviders } from './model/Pessoa/pessoa.providers';
import { databaseProviders } from './database/database.providers';
import { PessoaController } from './controller/pessoa.controller';
import { MedicamentoProviders } from './model/Medicamento/medicamento.providers';
import { atendenteProviders } from './model/Atendente/atendente.providers';
import { MedicamentoService } from './service/medicamento.service';
import { AtendenteService } from './service/atendente.service';
import { TitularProviders } from './model/Titular/titular.providers';
import { SexoProviders } from './model/Sexo/sexo.providers';
import { SolicitacaoProviders } from './model/Solicitacao/solicitacao.providers';
import { EstadoSolicitacaoProviders } from './model/EstadoSolicitacao/estado-solicitacao.providers';

@Module({
  providers: [
    ...MedicamentoProviders,
    ...PessoaProviders,
    ...atendenteProviders,
    ...databaseProviders,
    ...TitularProviders,
    ...SexoProviders,
    ...SolicitacaoProviders,
    ...EstadoSolicitacaoProviders,
    MedicamentoService,
    AtendenteService,
    PessoaService,
  ],
  controllers: [PessoaController],
})
export class PooModule {}