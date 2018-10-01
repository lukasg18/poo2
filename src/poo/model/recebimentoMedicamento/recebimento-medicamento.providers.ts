import { Connection, Repository } from 'typeorm';
import { RecebimentoMedicamentoPosto } from './recebimento-medicamento.entity';

export const RecebimentoMedicamentoProviders = [
  {
    provide: 'RecebimentoMedicamentoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(RecebimentoMedicamentoPosto),
    inject: ['DbConnectionToken'],
  },
];