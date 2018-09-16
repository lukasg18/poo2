import { Connection, Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';

export const PessoaProviders = [
  {
    provide: 'PessoaRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Pessoa),
    inject: ['DbConnectionToken'],
  },
];