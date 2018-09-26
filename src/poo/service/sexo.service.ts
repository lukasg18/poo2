import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Atendente } from '../model/Atendente/atendente.entity';
import { Sexo } from '../model/Sexo/sexo.entity';

@Injectable()
export class SexoService {
  constructor(
    @Inject('SexoRepositoryToken')
    private readonly SexoRepository: Repository<Sexo>,
  ) {}

  async findAll() {
    return await this.SexoRepository.find();
  }

  async Create(body) {
    let s = new Sexo;
    s.tipo = body.tipo;
    return await this.SexoRepository.save(s);
  }
}