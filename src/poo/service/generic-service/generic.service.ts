// import { Injectable, Inject } from '@nestjs/common';
// import { Repository } from 'typeorm';

// @Injectable()
// export class genericService<T> implements genericService<T> {
//   constructor(
//     @Inject('SexoRepositoryToken')
//     private readonly SexoRepository: Repository<T>,
//   ) {}

//   async findAll() {
//     return await this.SexoRepository.find();
//   }

//   async findOne(id) {
//     return await this.SexoRepository.findOne(id);
//   }

//   async Create(body) {
//     let s = new Sexo();
//     s.tipo = body.tipo;
//     return await this.SexoRepository.save(s);
//   }

//   async Remove(body) {
//     let s = new Sexo();
//     let busca;
//     s.tipo = body.tipo;
//     busca = await this.SexoRepository.findOne({ tipo: s.tipo });
//     return await this.SexoRepository.remove(busca);
//   }

//   async Update(body) {
//     let s = new Sexo();
//     s.idsexo = body.idsexo;
//     let busca = await this.SexoRepository.findOne({ idsexo: s.idsexo });
//     busca.tipo = body.tipo;
//     return await this.SexoRepository.save(busca);
//   }

// }
