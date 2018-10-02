import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Pessoa } from '../Pessoa/pessoa.entity';
import { RecebimentoMedicamentoPosto } from '../recebimentoMedicamento/recebimento-medicamento.entity';
import { Titular } from '../Titular/titular.entity';

@Entity()
export class Recebimento {
  @PrimaryGeneratedColumn()
  idrecebimento: number;

  @Column({ nullable: false })
  quantidademedicamentos: number;

  @Column({ nullable: false })
  data_hora: Date;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => RecebimentoMedicamentoPosto, recebimentoMedicamentoPosto => recebimentoMedicamentoPosto.recebimento)
  recebimentoMedicamentoPosto: RecebimentoMedicamentoPosto[];

  @ManyToOne(type => Pessoa, pessoa => pessoa.recebimento)
  @JoinColumn({name: "idpessoa"})
  pessoa: Pessoa;
}