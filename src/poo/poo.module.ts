import { Module } from '@nestjs/common';
import { photoProviders } from './model/Photo/photo.providers';
import { PhotoService } from './service/photo.service';
import { UserService } from './service/user.service';
import { PessoaService } from './service/pessoa.service';
import { PessoaProviders } from './model/Pessoa/pessoa.providers';
import { UserProviders } from './model/User/user.providers';
import { databaseProviders } from './database/database.providers';
import { PessoaController } from './controller/pessoa.controller';

@Module({
  providers: [
    ...photoProviders,
    ...PessoaProviders,
    ...UserProviders,
    ...databaseProviders,
    PhotoService,
    UserService,
    PessoaService
  ],
  controllers: [PessoaController],
})
export class PooModule {}