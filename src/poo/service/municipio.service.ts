import { Injectable, Inject } from '@nestjs/common';
import { Municipio } from '../model/municipio.entity';
import { genericInterface } from './interface/generic.interface';

@Injectable()
export class MunicipioService implements genericInterface<Municipio>{
  
  Drop(body: any): Promise<Municipio> {
    throw new Error("Method not implemented.");
  }

  async readAll(): Promise<Municipio[]| any> {
      return await Municipio.find();
  }
  
  async readOne(id:number): Promise<Municipio| any> {
      return await Municipio.findOne({idmunicipio:id});
  }
  
  async Create(body: any): Promise<Municipio| any>{
    let municipio = new Municipio();
    try{
    municipio.nome = body.nome;
    municipio.estado = body.idestado; 
    return await Municipio.save(municipio);
    } catch(err){
      throw new Error(`Erro ao criar municipio\n Erro: ${err.name}\n Mensagem: ${err.message}\n Os parametros estao certos?`,);
    }

  }

  async Update(body): Promise<Municipio| any> {
    let m = new Municipio();
    try{
    m.idmunicipio = body.idmunicipio;
    let busca = await Municipio.findOne({ idmunicipio: m.idmunicipio });
    busca.nome = body.nome;
    return await Municipio.save(busca);
    } catch(err){
      throw new Error(`Erro ao atualizar municipio\n Erro: ${err.name}\n Mensagem: ${err.message}\n Os parametros estao certos?`,);
    }
  }
    
}