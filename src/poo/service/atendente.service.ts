import { Injectable, Inject } from '@nestjs/common';
import { Atendente } from '../model/atendente.entity';
import { IAtendente } from './interface/atendente.interface';

@Injectable()
export class AtendenteService implements IAtendente {
  buscaRegistro(numeroregistro): Promise<Atendente | any> {
    return Atendente.findOne({numeroregistro: numeroregistro});
  }

  async readAll(): Promise<Atendente[] | any> {
    return Atendente.find();
  }

  async readOne(id: number): Promise<Atendente | any> {
    return Atendente.findOne({idpessoa: id});
  }

  async Create(body: any): Promise<Atendente> {
    let atendente = new Atendente();
    atendente.numeroregistro = body.numeroregistro;
    return await Atendente.save(atendente);
  }

  async Drop(body: any): Promise<Atendente> {
    throw new Error('Method not implemented.');
  }

  async Update(body: any): Promise<Atendente> {
    throw new Error('Method not implemented.');
  }
}
