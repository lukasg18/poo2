import { Connection, Repository } from 'typeorm';
import { Depedente } from './depedente.entity';

export const DepedenteProviders = [
  {
    provide: 'DepedenteRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Depedente),
    inject: ['DbConnectionToken'],
  },
];