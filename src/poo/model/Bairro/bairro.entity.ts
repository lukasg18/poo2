import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Municipio } from '../Municipio/municipio.entity';
import { Posto } from '../Posto/posto.entity';

@Entity()
export class Bairro {
  @PrimaryGeneratedColumn()
  idBairro: number;

  @Column({ length: 30 })
  nome: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Municipio, municipio => municipio.bairro)
  @JoinColumn({name: "idMunicipio"})
  municipio: Municipio;

  @OneToMany(type => Posto, posto => posto.bairro)
  posto: Posto[];
}