import { Module } from '@nestjs/common';
import { PessoaService } from './service/pessoa.service';
import { databaseProviders } from './database/database.providers';
import { PessoaController } from './controller/pessoa.controller';
import { MedicamentoService } from './service/medicamento.service';
import { AtendenteService } from './service/atendente.service';
import { TitularService } from './service/titular.service';
import { TitularController } from './controller/titular.controller';
import { SexoService } from './service/sexo.service';
import { SexoController } from './controller/sexo.controller';
import { AtendenteController } from './controller/atendente.controller';
import { EstadoService } from './service/estado.service';
import { EstadoController } from './controller/estado.controller';
import { BairroService } from './service/bairro.service';
import { BairroController } from './controller/bairro.controller';
import { MunicipioService } from './service/municipio.service';
import { MunicipioController } from './controller/municipio.controller';
import { LaboratorioService } from './service/laboratorio.service';
import { LaboratorioController } from './controller/laboratorio.controller';
import { RegMedService } from './service/registro-medicamento.service';
import { RegistroMedicamentoController } from './controller/registro-medicamento.controller';
import { RecebimentoService } from './service/recebimento.service';
import { RecebimentoController } from './controller/recebimento.controller';
import { SolicitacaoService } from './service/solicitacao.service';
import { SolicitacaoController } from './controller/solicitacao.controller';
import { DependenteService } from './service/depedente.service';

const modelProvider = [...databaseProviders];

const modelService = [
  MedicamentoService,
  AtendenteService,
  PessoaService,
  TitularService,
  SexoService,
  EstadoService,
  BairroService,
  MunicipioService,
  SolicitacaoService,
  LaboratorioService,
  RecebimentoService,
  RegMedService,
  DependenteService
];

const modelController = [
  PessoaController,
  TitularController,
  SexoController,
  AtendenteController,
  EstadoController,
  BairroController,
  MunicipioController,
  SolicitacaoController,
  LaboratorioController,
  RegistroMedicamentoController,
  RecebimentoController,
];

@Module({
  providers: [...modelProvider, ...modelService],
  controllers: [...modelController],
})
export class PooModule {}
