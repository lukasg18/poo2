import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, BaseEntity, ManyToMany, JoinTable } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { Atendente } from './atendente.entity';
import { MedicamentoPosto } from './medicamento-posto.entity';

@Entity()
export class Recebimento extends BaseEntity{
  @PrimaryGeneratedColumn()
  idrecebimento: number;

  @Column({ nullable: false })
  quantidademedicamentos: number;

  @Column({ nullable: false })
  data_hora: Date;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################


  @ManyToOne(type => Pessoa, pessoa => pessoa.recebimento)
  @JoinColumn({name: "idpessoa"})
  pessoa: Pessoa;

  @ManyToOne(type => Atendente, atendente => atendente.recebimento)
  @JoinColumn({name: "idatedente"})
  atendente: Atendente;

  @ManyToMany(type => MedicamentoPosto)
  @JoinTable({
    name: 'recebimento_medicamentoposto',
    joinColumn: {
      name: 'idrecebimento',
    },
    inverseJoinColumn: {
      name: 'idmedicamentoposto',
    },
  })
  medicamentoPosto: MedicamentoPosto[];
}