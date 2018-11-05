import { Injectable, Inject } from '@nestjs/common';
import { Municipio } from '../model/municipio.entity';

@Injectable()
export class MunicipioService{

    async readAll() {
        return await Municipio.find();
      }
    
    async readOne(id:number) {
        return await Municipio.findOne({idmunicipio:id});
      }
    async Create(body: any){
      let municipio = new Municipio();
      municipio.nome = body.nome;
      municipio.estado = body.idestado; 
      return await Municipio.save(municipio);
    }

    async Update(body) {
      let m = new Municipio();
      m.idmunicipio = body.idmunicipio;
      let busca = await Municipio.findOne({ idmunicipio: m.idmunicipio });
      busca.nome = body.nome;
      return await Municipio.save(busca);
    }
    
}