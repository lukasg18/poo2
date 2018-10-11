import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Atendente } from '../model/atendente.entity';

@Injectable()
export class AtendenteService {

  async buscaTodosAtendentes(): Promise<Atendente[]> {
    return await Atendente.find();
  }
}