import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pessoa } from '../model/pessoa.entity';

@Injectable()
export class PessoaService {

  async findAll(): Promise<Pessoa[]> {
    return await Pessoa.find();
  }

  async buscaCpf(cpf: string): Promise<Pessoa> {
    console.log(cpf)
    return await Pessoa.findOne({cpf:cpf});
  }
}