import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Titular } from '../Titular/titular.entity';
import { Sexo } from '../Sexo/sexo.entity';
import { Recebimento } from '../Recebimento/recebimento.entity';

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ nullable:false })
  data_nascimento: Date;

  @Column({ nullable:false, length:12 })
  cpf: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Titular, titular => titular.depedente)
  titular: Titular;

  @ManyToOne(type => Sexo, sexo => sexo.pessoa)
  sexo: Sexo;

  @OneToMany(type => Recebimento, recebimento => recebimento.pessoa)
  recebimento: Recebimento[];
}