import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, PrimaryColumn, BaseEntity } from 'typeorm';
import { Posto } from './posto.entity';
import { Pessoa } from './pessoa.entity';
import { EntradaMedicamento } from './entrada-medicamento.entity';
import { Recebimento } from './recebimento.entity';

@Entity()
export class Atendente extends BaseEntity{

  @PrimaryColumn()
  idpessoa:number;

  @Column({ nullable:false })
  numeroregistro: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################


  @OneToMany(type => Recebimento, recebimento => recebimento.atendente)
  recebimento: Recebimento[];

  @ManyToOne(type => Posto, posto => posto.atendente)
  @JoinColumn({name: "idposto"})
  posto: Posto;

  @OneToMany(type => EntradaMedicamento, entradaMedicamento => entradaMedicamento.atendente)
  entradaMedicamento: EntradaMedicamento[];

  @ManyToOne(type => Pessoa, pessoa => pessoa.atendente)
  @JoinColumn({name: "idpessoa"})
  pessoa: Pessoa;
}