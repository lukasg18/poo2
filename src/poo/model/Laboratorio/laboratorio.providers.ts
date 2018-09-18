import { Connection, Repository } from 'typeorm';
import { Laboratorio } from './laboratorio.entity';

export const LaboratorioProviders = [
  {
    provide: 'LaboratorioRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Laboratorio),
    inject: ['DbConnectionToken'],
  },
];