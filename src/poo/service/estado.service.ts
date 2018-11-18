import { Injectable, Inject } from '@nestjs/common';
import { Estado } from '../model/estado.entity';
import { genericInterface } from './interface/generic.interface';

@Injectable()
export class EstadoService implements genericInterface<Estado> {
  
  async Drop(body: any): Promise<Estado> {
    throw new Error("Method not implemented.");
  }
  
  async readAll(): Promise<Estado | any> {
    return await Estado.find();
  }

  async readOne(id: number): Promise< Estado| any> {
    return await Estado.findOne({ idestado: id });
  }

  async Create(body: any): Promise<Estado>{
    let estado = new Estado();
    try{
    estado.nome = body.nome;
    return await Estado.save(estado);
    } catch(err){
      throw new Error(`Erro ao criar estado\n Erro: ${err.name}\n Mensagem: ${err.message}\n Os parametros estao certos?`,);
    }
  }

  async Update(body): Promise<Estado| any> {
    let e = new Estado();
    try{
    e.idestado = body.idestado;
    let busca = await Estado.findOne({ idestado: e.idestado });
    busca.nome = body.nome;
    return await Estado.save(busca);
    } catch(err){
      throw new Error(`Erro ao atualizar estado\n Erro: ${err.name}\n Mensagem: ${err.message}\n Os parametros estao certos?`,);
    }
  }
}
