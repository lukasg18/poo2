import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Atendente } from '../Atendente/atendente.entity';
import { MedicamentoPosto } from '../MedicamentoPosto/medicamento-posto.entity';

@Entity()
export class Controle {
  @PrimaryGeneratedColumn()
  idcontrole: number;

  @Column({ nullable: false })
  quantidade: number;

  @Column({ nullable:false })
  codigobarras: number;

  @Column({ nullable:false })
  datahora: Date;

  @Column({ nullable:false })
  tipocontrole: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Atendente, atendente => atendente.controle)
  @JoinColumn({name: "idatendente"})
  atendente: Atendente[];

  @ManyToOne(type => MedicamentoPosto, medicamentoPosto => medicamentoPosto.controle)
  @JoinColumn({name: "idmedicamentoposto"})
  medicamentoPosto: MedicamentoPosto;
}