import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Atendente } from '../Atendente/atendente.entity';
import { Bairro } from '../Bairro/bairro.entity';
import { MedicamentoPosto } from '../MedicamentoPosto/medicamento-posto.entity';

@Entity()
export class Lote {
  @PrimaryGeneratedColumn()
  idlote: Number;

  @Column()
  quantidade: Number;

  @Column()
  datavencimento: Date;

  @Column()  
  numero: Number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => MedicamentoPosto, medicamentoPosto => medicamentoPosto.posto)
  @JoinColumn({name: "idmedicamentoposto"})
  medicamentoPosto: MedicamentoPosto
}