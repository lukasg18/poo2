import { Connection, Repository } from 'typeorm';
import { Estado } from './estado.entity';

export const EstadoProviders = [
  {
    provide: 'EstadoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Estado),
    inject: ['DbConnectionToken'],
  },
];