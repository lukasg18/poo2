import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Atendente } from '../Atendente/atendente.entity';
import { Bairro } from '../Bairro/bairro.entity';
import { MedicamentoPosto } from '../MedicamentoPosto/medicamento-posto.entity';

@Entity()
export class Lote {
  @PrimaryGeneratedColumn()
  idLote: Number;

  @Column()
  quantidade: Number;

  @Column()
  dataVencimento: Date;

  @Column()  
  numero: Number;

  @ManyToOne(type => MedicamentoPosto, medicamentoPosto => medicamentoPosto.posto)
  medicamentoPosto: MedicamentoPosto
}