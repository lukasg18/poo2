import { Connection, Repository } from 'typeorm';
import { Sexo } from './sexo.entity';

export const SexoProviders = [
  {
    provide: 'SexoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Sexo),
    inject: ['DbConnectionToken'],
  },
];