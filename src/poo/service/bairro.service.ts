import { Injectable, Inject } from '@nestjs/common';
import { Bairro } from '../model/bairro.entity';

@Injectable()
export class BairroService {
  async readAll() {
    return await Bairro.find();
  }

  async readOne(id: number) {
    return await Bairro.findOne({ idbairro: id });
  }

  async Create(body: any) {
    let bairro = new Bairro();
    bairro.nome = body.nome;
    bairro.municipio = body.idmunicipio;
    return await Bairro.save(bairro);
  }

  async Remove(body) {
    try {
      let b = new Bairro();
      let busca;
      b.nome = body.nome;
      busca = await Bairro.findOne({ nome: b.nome });
      return await Bairro.remove(busca);
    } catch (err) {
      throw new Error(
        `Erro ao remover bairro\n Erro: ${err.name}\n Mensagem: ${
          err.message
        }\n Os parametros estao certos?`,
      );
    }
  }

  async Update(body) {
    let b = new Bairro();
    b.idbairro = body.idbairro;
    let busca = await Bairro.findOne({ idbairro: b.idbairro });
    busca.nome = body.nome;
    return await Bairro.save(busca);
  }
}
