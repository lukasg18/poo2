import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Atendente } from '../Atendente/atendente.entity';
import { TipoControle } from '../TipoControle/tipo-controle.entity';
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

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Atendente, atendente => atendente.controle)
  atendente: Atendente[];

  @ManyToOne(type => TipoControle, tipoControle => tipoControle.controle)
  @JoinColumn({name: "idtipocontrole"})
  tipoControle: TipoControle;

  @ManyToOne(type => MedicamentoPosto, medicamentoPosto => medicamentoPosto.controle)
  @JoinColumn({name: "idmedicamentoposto"})
  medicamentoPosto: MedicamentoPosto;
}