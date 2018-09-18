import { Connection, Repository } from 'typeorm';
import { Bairro } from './bairro.entity';

export const BairroProviders = [
  {
    provide: 'BairroRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Bairro),
    inject: ['DbConnectionToken'],
  },
];