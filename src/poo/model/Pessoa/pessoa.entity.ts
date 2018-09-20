import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Titular } from '../Titular/titular.entity';
import { Sexo } from '../Sexo/sexo.entity';
import { Recebimento } from '../Recebimento/recebimento.entity';
import { PessoaAbs } from '../Abstract/pessoa-abstract.entity';
import { Depedente } from '../Depedente/depedente.entity';
import { Atendente } from '../Atendente/atendente.entity';

@Entity()
export class Pessoa extends PessoaAbs{

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################


  @ManyToOne(type => Sexo, sexo => sexo.pessoa)
  @JoinColumn({name: "idSexo"})
  sexo: Sexo;

  @OneToMany(type => Recebimento, recebimento => recebimento.pessoa)
  recebimento: Recebimento[];

  @OneToMany(type => Titular, titular => titular.pessoa)
  titular: Titular[];

  @OneToMany(type => Depedente, depedente => depedente.pessoa)
  depedente: Depedente[];

  @OneToMany(type => Atendente, atendente => atendente.pessoa)
  atendente: Atendente[];
}