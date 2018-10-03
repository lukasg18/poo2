import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Medicamento } from '../model/medicamento.entity';

@Injectable()
export class MedicamentoService {

  async findAll(): Promise<Medicamento[]> {
    return await Medicamento.find();
  }
}