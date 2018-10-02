import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { MedicamentoPosto } from '../MedicamentoPosto/medicamento-posto.entity';
import { Atendente } from '../Atendente/atendente.entity';

@Entity()
export class EntradaMedicamento{
  @PrimaryGeneratedColumn()
  identradamedicamento: number;

  @Column({ nullable: false })
  quantidade: number;

  @Column({ nullable:false })
  data_hora: Date;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Atendente, atendente => atendente.entradaMedicamento)
  @JoinColumn({name: "idatendente"})
  atendente: Atendente;

  @ManyToOne(type => MedicamentoPosto, medicamentoPosto => medicamentoPosto.entradaMedicamento)
  @JoinColumn({name: "idmedicamentoposto"})
  medicamentoPosto: MedicamentoPosto;
}