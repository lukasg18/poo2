import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, PrimaryColumn, BaseEntity } from 'typeorm';
import { MedicamentoPosto } from './medicamento-posto.entity';
import { Atendente } from './atendente.entity';

@Entity()
export class EntradaMedicamento extends BaseEntity{
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