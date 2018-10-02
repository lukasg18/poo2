import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Atendente } from '../Atendente/atendente.entity';
import { Medicamento } from '../Medicamento/medicamento.entity';
import { Recebimento } from '../Recebimento/recebimento.entity';
import { MedicamentoPosto } from '../MedicamentoPosto/medicamento-posto.entity';

@Entity('recebimento_medicamentoposto')
export class RecebimentoMedicamentoPosto {
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
