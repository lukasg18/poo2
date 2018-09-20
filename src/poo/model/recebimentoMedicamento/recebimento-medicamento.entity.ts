import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Atendente } from '../Atendente/atendente.entity';
import { Medicamento } from '../Medicamento/medicamento.entity';
import { Recebimento } from '../Recebimento/recebimento.entity';

@Entity()
export class RecebimentoMedicamento {
  @PrimaryGeneratedColumn()
  idRecebimentoMedicamento: number;

  @Column({ nullable: false })
  quantidadeMedicamentos: number; 
  
  @Column({ nullable: false })   
  data_hora: Date;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Atendente, atendente => atendente.recebimentoMedicamento)
  @JoinColumn({name: "idAtendente"})   
  atedente: Atendente;

  @ManyToOne(type => Recebimento, recebimento => recebimento.recebimentoMedicamento)
  @JoinColumn({name: "idRecebimento"})    
  recebimento: Recebimento;

  @OneToMany(type => Medicamento, medicamento => medicamento.recebimentoMedicamento)
  medicamento: Medicamento[];
}