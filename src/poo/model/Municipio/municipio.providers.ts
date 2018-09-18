import { Connection, Repository } from 'typeorm';
import { Municipio } from './municipio.entity';

export const MunicipioProviders = [
  {
    provide: 'MunicipioRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Municipio),
    inject: ['DbConnectionToken'],
  },
];