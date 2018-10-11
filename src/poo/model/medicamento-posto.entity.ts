import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';
import { Posto } from './posto.entity';
import { Medicamento } from './medicamento.entity';
import { EntradaMedicamento } from './entrada-medicamento.entity';

export enum EstadoMedicamentoEnum {
  Indisponivel = 0,
  Disponivel = 1,
} 

@Entity()
export class MedicamentoPosto extends BaseEntity{
  @PrimaryGeneratedColumn()
  idmedicamentoposto: number;

  @Column({ nullable: false })
  estadomedicamento: EstadoMedicamentoEnum;

  @Column({ nullable: false })
  quantidade: number;

  @Column({ nullable: false })
  datavencimento: Date;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Posto, posto => posto.medicamentoPosto)
  @JoinColumn({ name: 'idposto' })
  posto: Posto;

  @ManyToOne(type => Medicamento, medicamento => medicamento.medicamentoPosto)
  @JoinColumn({ name: 'idmedicamento' })
  medicamento: Medicamento;

  @OneToMany(type => EntradaMedicamento, entradaMedicamento => entradaMedicamento.medicamentoPosto)
  entradaMedicamento: EntradaMedicamento[];

}
