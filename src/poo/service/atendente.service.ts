import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Atendente } from '../model/Atendente/atendente.entity';

@Injectable()
export class AtendenteService {
  constructor(
    @Inject('AtendenteRepositoryToken')
    private readonly atendenteRepository: Repository<Atendente>,
  ) {}

  async findAll(): Promise<Atendente[]> {
    return await this.atendenteRepository.find();
  }
}