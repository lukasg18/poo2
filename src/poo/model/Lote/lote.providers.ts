import { Connection, Repository } from 'typeorm';
import { Lote } from './lote.entity';

export const LoteProviders = [
  {
    provide: 'LoteRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Lote),
    inject: ['DbConnectionToken'],
  },
];