import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn, PrimaryColumn } from 'typeorm';
import { RecebimentoMedicamentoPosto } from '../recebimentoMedicamento/recebimento-medicamento.entity';
import { Posto } from '../Posto/posto.entity';
import { PessoaAbs } from '../Abstract/pessoa-abstract.entity';
import { Pessoa } from '../Pessoa/pessoa.entity';
import { EntradaMedicamento } from '../EntradaMedicamento/entrada-medicamento.entity';

@Entity()
export class Atendente{

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