import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pessoa } from '../model/Pessoa/pessoa.entity';

@Injectable()
export class PessoaService {
  constructor(
    @Inject('PessoaRepositoryToken')
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {}

  async findAll(): Promise<Pessoa[]> {
    return await this.pessoaRepository.find();
  }
}