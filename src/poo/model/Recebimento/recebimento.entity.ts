import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Pessoa } from '../Pessoa/pessoa.entity';
import { RecebimentoMedicamento } from '../recebimentoMedicamento/recebimento-medicamento.entity';
import { Titular } from '../Titular/titular.entity';

@Entity()
export class Recebimento {
  @PrimaryGeneratedColumn()
  idRecebimento: number;

  @Column({ nullable: false })
  quantidadeMedicamentos: number;

  @Column({ nullable: false })
  data_hora: Date;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => RecebimentoMedicamento, recebimentoMedicamento => recebimentoMedicamento.recebimento)
  recebimentoMedicamento: RecebimentoMedicamento[];

  @ManyToOne(type => Pessoa, pessoa => pessoa.recebimento)
  @JoinColumn({name: "idPessoa"})
  pessoa: Pessoa;
}