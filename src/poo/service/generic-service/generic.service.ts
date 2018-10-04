import { Injectable, Inject } from '@nestjs/common';
import {
  Repository,
  ObjectLiteral,
  DeepPartial,
  getCustomRepository,
  getManager,
} from 'typeorm';
import { genericInterface } from './generic.interface';
import { Titular } from '../../model/titular.entity';
import { Pessoa } from '../../model/pessoa.entity';

@Injectable()
export class genericService<T> {

  async readAll() {
    let z = new Titular();
    let x = getManager();
    return await x.find(Titular);
  }

  async readOne(partialEntity: DeepPartial<T>) {
    return 'teste';
  }

  async Create(body) {
    return 'teste';
  }

  async Drop(body) {
    return 'teste';
  }

  async Update(body) {
    return 'teste';
  }
}
