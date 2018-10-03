import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Atendente } from './atendente.entity';
import { Medicamento } from './medicamento.entity';
import { Recebimento } from './recebimento.entity';
import { MedicamentoPosto } from './medicamento-posto.entity';

@Entity('recebimento_medicamentoposto')
export class RecebimentoMedicamentoPosto extends BaseEntity{
  @PrimaryGeneratedColumn()
  idatendente: number;

  @PrimaryGeneratedColumn()
  idrecebimento: number;

  @PrimaryGeneratedColumn()
  idmedicamentoposto: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Atendente, atendente => atendente.recebimentoMedicamento)
  @JoinColumn({ name: 'idatendente' })
  atedente: Atendente;

  @ManyToOne(
    type => Recebimento,
    recebimento => recebimento.recebimentoMedicamentoPosto,
  )
  @JoinColumn({ name: 'idrecebimento' })
  recebimento: Recebimento;

  @ManyToOne(
    type => MedicamentoPosto,
    medicamentoPosto => medicamentoPosto.recebimentoMedicamentoPosto,
  )
  @JoinColumn({ name: 'idmedicamentoposto' })
  medicamentoPosto: Medicamento;
}
