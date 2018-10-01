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
import { SolicitacaoProviders } from './model/Solicitacao/solicitacao.providers';
import { EstadoSolicitacaoProviders } from './model/EstadoSolicitacao/estado-solicitacao.providers';
import { PostoProviders } from './model/Posto/posto.providers';
import { BairroProviders } from './model/Bairro/bairro.providers';
import { EstadoProviders } from './model/Estado/estado.providers';
import { MunicipioProviders } from './model/Municipio/municipio.providers';
import { ControleProviders } from './model/Controle/controle.providers';
import { MedicamentoPostoProviders } from './model/MedicamentoPosto/medicamento-posto.providers';
import { RecebimentoProviders } from './model/Recebimento/recebimento.providers';
import { CategoriaProviders } from './model/Categoria/categoria.providers';
import { LaboratorioProviders } from './model/Laboratorio/laboratorio.providers';
import { TitularService } from './service/titular.service';
import { TitularController } from './controller/titular.controller';
import { RecebimentoMedicamentoProviders } from './model/recebimentoMedicamento/recebimento-medicamento.providers';
import { LoteProviders } from './model/Lote/lote.providers';
import { SexoService } from './service/sexo.service';
import { SexoController } from './controller/sexo.controller';

const modelProvider = [
  ...MedicamentoProviders,
  ...PessoaProviders,
  ...atendenteProviders,
  ...databaseProviders,
  ...TitularProviders,
  ...SolicitacaoProviders,
  ...EstadoSolicitacaoProviders,
  ...PostoProviders,
  ...BairroProviders,
  ...EstadoProviders,
  ...MunicipioProviders,
  ...ControleProviders,
  ...MedicamentoPostoProviders,
  ...RecebimentoProviders,
  ...CategoriaProviders,
  ...LaboratorioProviders,
  ...RecebimentoMedicamentoProviders,
  ...LoteProviders,
];

const modelService = [
  MedicamentoService,
  AtendenteService,
  PessoaService,
  TitularService,
  SexoService,
];

const modelController = [PessoaController, TitularController, SexoController];

@Module({
  providers: [...modelProvider, ...modelService],
  controllers: [...modelController],
})
export class PooModule {}
