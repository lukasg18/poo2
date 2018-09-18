import { Connection, Repository } from 'typeorm';
import { Medicamento } from './medicamento.entity';

export const MedicamentoProviders = [
  {
    provide: 'MedicamentoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Medicamento),
    inject: ['DbConnectionToken'],
  },
];