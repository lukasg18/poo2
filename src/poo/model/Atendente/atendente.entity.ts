import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { RecebimentoMedicamento } from '../recebimentoMedicamento/recebimento-medicamento.entity';
import { Posto } from '../Posto/posto.entity';
import { Controle } from '../Controle/controle.entity';
import { PessoaAbs } from '../Abstract/pessoa-abstract.entity';
import { Pessoa } from '../Pessoa/pessoa.entity';

@Entity()
export class Atendente{
  @PrimaryGeneratedColumn()
  idatendente: number;

  @Column({ nullable:false })
  numeroregistro: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################


  @OneToMany(type => RecebimentoMedicamento, recebimentoMedicamento => recebimentoMedicamento.atedente)
  recebimentoMedicamento: RecebimentoMedicamento[];

  @ManyToOne(type => Posto, posto => posto.atendente)
  @JoinColumn({name: "idposto"})
  posto: Posto;

  @ManyToOne(type => Controle, controle => controle.atendente)
  @JoinColumn({name: "idcontrole"})
  controle: Controle;

  @ManyToOne(type => Pessoa, pessoa => pessoa.atendente)
  @JoinColumn({name: "idpessoa"})
  pessoa: Pessoa;
}