import { Connection, Repository } from 'typeorm';
import { Solicitacao } from './solicitacao.entity';

export const SolicitacaoProviders = [
  {
    provide: 'SolicitacaoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Solicitacao),
    inject: ['DbConnectionToken'],
  },
];