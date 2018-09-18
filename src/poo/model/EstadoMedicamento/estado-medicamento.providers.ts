import { Connection, Repository } from 'typeorm';
import { EstadoMedicamento } from './estado-medicamento.entity';

export const EstadoMedicamentoProviders = [
  {
    provide: 'EstadoMedicamentoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(EstadoMedicamento),
    inject: ['DbConnectionToken'],
  },
];