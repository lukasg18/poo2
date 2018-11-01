import { Injectable, Inject } from '@nestjs/common';
import { Estado } from '../model/estado.entity';

@Injectable()
export class EstadoService {
  async readAll() {
    return await Estado.find();
  }

  async readOne(id: number) {
    return await Estado.findOne({ idestado: id });
  }

  async Create(body: any){
    let estado = new Estado();
    estado.nome = body.nome;
    return await Estado.save(estado);
  }

  async Update(body) {
    let e = new Estado();
    e.idestado = body.idestado;
    let busca = await Estado.findOne({ idestado: e.idestado });
    busca.nome = body.nome;
    return await Estado.save(busca);
  }
}
