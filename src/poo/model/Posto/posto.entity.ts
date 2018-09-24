import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Atendente } from '../Atendente/atendente.entity';
import { Bairro } from '../Bairro/bairro.entity';
import { MedicamentoPosto } from '../MedicamentoPosto/medicamento-posto.entity';

@Entity()
export class Posto {
  @PrimaryGeneratedColumn()
  idposto: number;

  @Column({ length: 200 })
  complemento: string;

  @Column({ nullable:false })
  cep: number;

  @Column({ nullable:false })
  numero: number;

  @Column({ length: 20 })
  coordgeolong: string;

  @Column({ length: 20 })
  coordgeolat: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Atendente, atendente => atendente.posto)
  atendente: Atendente[];

  @ManyToOne(type => Bairro, bairro => bairro.posto)
  @JoinColumn({name: "idbairro"})
  bairro: Bairro;

  @OneToMany(type => MedicamentoPosto, medicamentoPosto => medicamentoPosto.posto)
  medicamentoPosto: MedicamentoPosto[];

}