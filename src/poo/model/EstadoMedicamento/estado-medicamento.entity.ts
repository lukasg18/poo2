import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Medicamento } from '../Medicamento/medicamento.entity';

@Entity()
export class EstadoMedicamento {
  @PrimaryGeneratedColumn()
  idEstadoMedicamento: number;

  @Column({ length: 30 })
  tipo: string;

  @OneToMany(type => Medicamento, medicamento => medicamento.estadoMedicamento)
  medicamento: Medicamento[]
}