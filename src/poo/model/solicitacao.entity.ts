import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable, BaseEntity } from 'typeorm';
import { Titular } from './titular.entity';
import { Medicamento } from './medicamento.entity';
import { MedicamentoPosto } from './medicamento-posto.entity';

@Entity()
export class Solicitacao extends BaseEntity{
  @PrimaryGeneratedColumn()
  idsolicitacao: number;

  @Column({ nullable:false })
  data_hora: Date;

  @Column({ nullable:false })
  quantidademedicamento: number;

  @Column({ nullable:false })
  estadosolicitacao: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################
  

  @ManyToOne(type => Titular, titular => titular.solicitacao)
  @JoinColumn({name: "idtitular"})   
  titular: Titular

  @ManyToMany(type => MedicamentoPosto)
  @JoinTable({
    name: 'solicitacao_medicamentoposto',
    joinColumn: {
      name: 'idsolicitacao',
    },
    inverseJoinColumn: {
      name: 'idmedicamentoposto',
    },
  })
  medicamentoPosto: MedicamentoPosto[];

}