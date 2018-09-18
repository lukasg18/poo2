import { Connection, Repository } from 'typeorm';
import { MedicamentoPosto } from './medicamento-posto.entity';

export const MedicamentoPostoProviders = [
  {
    provide: 'MedicamentoPostoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(MedicamentoPosto),
    inject: ['DbConnectionToken'],
  },
];