import { Connection, Repository } from 'typeorm';
import { EstadoSolicitacao } from './estado-solicitacao.entity';

export const EstadoSolicitacaoProviders = [
  {
    provide: 'EstadoSolicitacaoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(EstadoSolicitacao),
    inject: ['DbConnectionToken'],
  },
];