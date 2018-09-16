import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';

@Injectable()
export class PessoaService {
  constructor(
    @Inject('PessoaRepositoryToken')
    private readonly photoRepository: Repository<Pessoa>,
  ) {}

  async findAll(): Promise<Pessoa[]> {
    return await this.photoRepository.find();
  }
}