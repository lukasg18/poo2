import { Injectable, Inject } from '@nestjs/common';
import { Atendente } from '../model/atendente.entity';
import { IAtendente } from './interface/atendente.interface';

@Injectable()
export class AtendenteService implements IAtendente {
  buscaCpf(cpf: any) {
    throw new Error('Method not implemented.');
  }

  async readAll(): Promise<Atendente[] | any> {
    let resposta = await Atendente.find();
    if(resposta == []){
        return "ERROR"
    } else{
      return resposta
    }
  }

  async readOne(id: number): Promise<Atendente | any> {
    let resposta = await Atendente.findOne({idpessoa: 100});
    if(resposta){
        return "ERROR"
    } else{
      return resposta
    }
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
