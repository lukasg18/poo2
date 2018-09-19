import { Connection, Repository } from 'typeorm';
import { RecebimentoMedicamento } from './recebimento-medicamento.entity';

export const RecebimentoMedicamentoProviders = [
  {
    provide: 'RecebimentoMedicamentoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(RecebimentoMedicamento),
    inject: ['DbConnectionToken'],
  },
];