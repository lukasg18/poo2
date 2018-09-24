import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Atendente } from '../Atendente/atendente.entity';
import { Medicamento } from '../Medicamento/medicamento.entity';
import { Recebimento } from '../Recebimento/recebimento.entity';

@Entity()
export class RecebimentoMedicamento {
  @PrimaryGeneratedColumn()
  idrecebimentomedicamento: number;

  @Column({ nullable: false })
  quantidademedicamentos: number; 
  
  @Column({ nullable: false })   
  datahora: Date;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Atendente, atendente => atendente.recebimentoMedicamento)
  @JoinColumn({name: "idatendente"})   
  atedente: Atendente;

  @ManyToOne(type => Recebimento, recebimento => recebimento.recebimentoMedicamento)
  @JoinColumn({name: "idrecebimento"})    
  recebimento: Recebimento;

  @OneToMany(type => Medicamento, medicamento => medicamento.recebimentoMedicamento)
  medicamento: Medicamento[];
}