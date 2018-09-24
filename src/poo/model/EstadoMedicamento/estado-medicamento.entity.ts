import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Medicamento } from '../Medicamento/medicamento.entity';

@Entity()
export class EstadoMedicamento {
  @PrimaryGeneratedColumn()
  idestadomedicamento: number;

  @Column({ length: 30 })
  tipo: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Medicamento, medicamento => medicamento.estadoMedicamento)
  medicamento: Medicamento[]
}