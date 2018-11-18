import { Injectable, Inject } from '@nestjs/common';
import { Bairro } from '../model/bairro.entity';
import { genericInterface } from './interface/generic.interface';

@Injectable()
export class BairroService implements genericInterface<Bairro>{
 
  Drop(body: any): Promise<Bairro> {
    throw new Error("Method not implemented.");
  }
  
  async readAll(): Promise<Bairro[]| any>{
      return await Bairro.find();
  }

  async readOne(id: number): Promise<Bairro| any>{
      return await Bairro.findOne({idbairro:id});
  }

  async Create(body: any): Promise<Bairro>{
    let bairro = new Bairro();
    try{
      bairro.nome = body.nome;
      bairro.municipio = body.idmunicipio; 
      return await Bairro.save(bairro);
    } catch (err) {
      throw new Error(
        `Erro ao salvar bairro\n Erro: ${err.name}\n Mensagem: ${err.message}\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body): Promise<Bairro>{
    let b = new Bairro();
    try{
      b.idbairro = body.idbairro;
      let busca = await Bairro.findOne({ idbairro: b.idbairro });
      busca.nome = body.nome;
      return await Bairro.save(busca);
    } catch(err){
      throw new Error(
        `Erro ao atualizar bairro\n Erro: ${err.name}\n Mensagem: ${err.message}\n Os parametros estao certos?`,
      );
    }
  }
}