import { Connection, Repository } from 'typeorm';
import { Atendente } from './atendente.entity';

export const atendenteProviders = [
  {
    provide: 'AtendenteRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Atendente),
    inject: ['DbConnectionToken'],
  },
];