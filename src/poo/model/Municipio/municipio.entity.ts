import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Estado } from '../Estado/estado.entity';
import { Bairro } from '../Bairro/bairro.entity';

@Entity()
export class Municipio {
  @PrimaryGeneratedColumn()
  idMunicipio: number;

  @Column({ length: 80 })
  nome: string;

  @ManyToOne(type => Estado, estado => estado.municipio)
  estado: Estado;

  @OneToMany(type => Bairro, bairro => bairro.municipio)
  bairro: Bairro[];
}