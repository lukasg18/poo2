import { Connection, Repository } from 'typeorm';
import { Controle } from './controle.entity';

export const ControleProviders = [
  {
    provide: 'ControleRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Controle),
    inject: ['DbConnectionToken'],
  },
];