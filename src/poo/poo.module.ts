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

const modelProvider = [...databaseProviders];

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
