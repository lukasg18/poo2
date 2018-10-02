import { Connection, Repository } from 'typeorm';
import { EntradaMedicamento } from './entrada-medicamento.entity';

export const EntradaMedicamentoProviders = [
  {
    provide: 'EntradaMedicamentoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(EntradaMedicamento),
    inject: ['DbConnectionToken'],
  },
];