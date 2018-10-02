import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { Titular } from '../Titular/titular.entity';
import { Medicamento } from '../Medicamento/medicamento.entity';
import { MedicamentoPosto } from '../MedicamentoPosto/medicamento-posto.entity';

@Entity()
export class Solicitacao {
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
  medicamentoPosto: MedicamentoPosto;

}