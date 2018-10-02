import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Titular } from '../Titular/titular.entity';
import { Recebimento } from '../Recebimento/recebimento.entity';
import { PessoaAbs } from '../Abstract/pessoa-abstract.entity';
import { Pessoa } from '../Pessoa/pessoa.entity';

@Entity()
export class Depedente{
  @PrimaryColumn()
  idpessoa:number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Titular, titular => titular.depedente)
  @JoinColumn({name: "idtitular"})
  titular: Titular;

  @ManyToOne(type => Pessoa, pessoa => pessoa.depedente)
  @JoinColumn({name: "idpessoa"})
  pessoa: Pessoa;

}