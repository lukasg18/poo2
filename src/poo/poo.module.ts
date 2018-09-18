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
import { EstadoMedicamentoProviders } from './model/EstadoMedicamento/estado-medicamento.providers';
import { PostoProviders } from './model/Posto/posto.providers';
import { BairroProviders } from './model/Bairro/bairro.providers';
import { EstadoProviders } from './model/Estado/estado.providers';
import { MunicipioProviders } from './model/Municipio/municipio.providers';
import { ControleProviders } from './model/Controle/controle.providers';

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
    ...EstadoMedicamentoProviders,
    ...PostoProviders,
    ...BairroProviders,
    ...EstadoProviders,
    ...MunicipioProviders,
    ...ControleProviders,
    MedicamentoService,
    AtendenteService,
    PessoaService,
  ],
  controllers: [PessoaController],
})
export class PooModule {}