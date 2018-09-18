import { Connection, Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

export const CategoriaProviders = [
  {
    provide: 'CategoriaRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Categoria),
    inject: ['DbConnectionToken'],
  },
];