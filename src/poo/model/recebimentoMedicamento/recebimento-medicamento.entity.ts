import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Atendente } from '../Atendente/atendente.entity';
import { Medicamento } from '../Medicamento/medicamento.entity';
import { Recebimento } from '../Recebimento/recebimento.entity';

@Entity()
export class RecebimentoMedicamento {
  @PrimaryGeneratedColumn()
  idRecebimento: number;

  @Column({ nullable: false })
  quantidadeMedicamentos: number; 
  
  @Column({ nullable: false })   
  data_hora: Date;

  @ManyToOne(type => Atendente, atendente => atendente.recebimentoMedicamento)   
  atedente: Atendente;

  @ManyToOne(type => Recebimento, recebimento => recebimento.recebimentoMedicamento)   
  recebimento: Recebimento;

  @OneToMany(type => Medicamento, medicamento => medicamento.recebimentoMedicamento)
  medicamento: Medicamento[];
}