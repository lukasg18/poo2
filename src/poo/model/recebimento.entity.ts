import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { RecebimentoMedicamentoPosto } from './recebimento-medicamento.entity';
import { Titular } from './titular.entity';

@Entity()
export class Recebimento extends BaseEntity{
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