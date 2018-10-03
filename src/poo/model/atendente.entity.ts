import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, PrimaryColumn, BaseEntity } from 'typeorm';
import { RecebimentoMedicamentoPosto } from './recebimento-medicamento.entity';
import { Posto } from './posto.entity';
import { Pessoa } from './pessoa.entity';
import { EntradaMedicamento } from './entrada-medicamento.entity';

@Entity()
export class Atendente extends BaseEntity{

  @PrimaryColumn()
  idpessoa:number;

  @Column({ nullable:false })
  numeroregistro: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################


  @OneToMany(type => RecebimentoMedicamentoPosto, recebimentoMedicamento => recebimentoMedicamento.atedente)
  recebimentoMedicamento: RecebimentoMedicamentoPosto[];

  @ManyToOne(type => Posto, posto => posto.atendente)
  @JoinColumn({name: "idposto"})
  posto: Posto;

  @OneToMany(type => EntradaMedicamento, entradaMedicamento => entradaMedicamento.atendente)
  entradaMedicamento: EntradaMedicamento[];

  @ManyToOne(type => Pessoa, pessoa => pessoa.atendente)
  @JoinColumn({name: "idpessoa"})
  pessoa: Pessoa;
}