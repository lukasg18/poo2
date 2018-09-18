import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Titular } from '../model/Titular/titular.entity';

@Injectable()
export class TitularService {
  constructor(
    @Inject('TitularRepositoryToken')
    private readonly titularRepository: Repository<Titular>,
  ) {}

  async findAll(): Promise<Titular[]> {
    return await this.titularRepository.find();
  }
}