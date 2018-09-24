import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Estado } from '../Estado/estado.entity';
import { Bairro } from '../Bairro/bairro.entity';

@Entity()
export class Municipio {
  @PrimaryGeneratedColumn()
  idmunicipio: number;

  @Column({ length: 80 })
  nome: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Estado, estado => estado.municipio)
  @JoinColumn({name: "idestado"})
  estado: Estado;

  @OneToMany(type => Bairro, bairro => bairro.municipio)
  bairro: Bairro[];
}