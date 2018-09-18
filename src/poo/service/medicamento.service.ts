import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Medicamento } from '../model/Medicamento/medicamento.entity';

@Injectable()
export class MedicamentoService {
  constructor(
    @Inject('MedicamentoRepositoryToken')
    private readonly medicamentoRepository: Repository<Medicamento>,
  ) {}

  async findAll(): Promise<Medicamento[]> {
    return await this.medicamentoRepository.find();
  }
}