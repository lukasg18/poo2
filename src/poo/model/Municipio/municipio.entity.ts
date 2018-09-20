import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Estado } from '../Estado/estado.entity';
import { Bairro } from '../Bairro/bairro.entity';

@Entity()
export class Municipio {
  @PrimaryGeneratedColumn()
  idMunicipio: number;

  @Column({ length: 80 })
  nome: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Estado, estado => estado.municipio)
  @JoinColumn({name: "idEstado"})
  estado: Estado;

  @OneToMany(type => Bairro, bairro => bairro.municipio)
  bairro: Bairro[];
}