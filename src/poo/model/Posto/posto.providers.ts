import { Connection, Repository } from 'typeorm';
import { Posto } from './posto.entity';

export const PostoProviders = [
  {
    provide: 'PostoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Posto),
    inject: ['DbConnectionToken'],
  },
];