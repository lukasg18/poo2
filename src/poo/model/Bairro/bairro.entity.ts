import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Municipio } from '../Municipio/municipio.entity';
import { Posto } from '../Posto/posto.entity';

@Entity()
export class Bairro {
  @PrimaryGeneratedColumn()
  idBairro: number;

  @Column({ length: 30 })
  nome: string;

  @ManyToOne(type => Municipio, municipio => municipio.bairro)
  municipio: Municipio;

  @OneToMany(type => Posto, posto => posto.bairro)
  posto: Posto[];
}