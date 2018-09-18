import { Connection, Repository } from 'typeorm';
import { Titular } from './titular.entity';

export const TitularProviders = [
  {
    provide: 'TitularRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Titular),
    inject: ['DbConnectionToken'],
  },
];