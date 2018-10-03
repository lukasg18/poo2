import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Titular } from '../model/titular.entity';

@Injectable()
export class TitularService<titular> {

  async findAll(): Promise<Titular[]> {
    return await Titular.find();
  }
}