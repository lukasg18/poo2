import { Connection, Repository } from 'typeorm';
import { User } from './user.entity';

export const UserProviders = [
  {
    provide: 'PhotoRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DbConnectionToken'],
  },
];