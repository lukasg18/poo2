import { Connection, Repository } from 'typeorm';
import { Recebimento } from './recebimento.entity';

export const RecebimentoProviders = [
  {
    provide: 'RecebimentoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Recebimento),
    inject: ['DbConnectionToken'],
  },
];