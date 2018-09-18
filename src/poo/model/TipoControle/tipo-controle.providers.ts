import { Connection, Repository } from 'typeorm';
import { TipoControle } from './tipo-controle.entity';

export const TipoControleProviders = [
  {
    provide: 'TipoControleRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(TipoControle),
    inject: ['DbConnectionToken'],
  },
];