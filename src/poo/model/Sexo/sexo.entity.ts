import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Pessoa } from '../Pessoa/pessoa.entity';

@Entity()
export class Sexo {

  @PrimaryGeneratedColumn()
  idSexo: number;

  @Column({ length:10 })
  tipo: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Pessoa, pessoa => pessoa.sexo)
  pessoa: Pessoa[];
}