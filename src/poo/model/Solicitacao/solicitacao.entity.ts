import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { EstadoSolicitacao } from '../EstadoSolicitacao/estado-solicitacao.entity';
import { Titular } from '../Titular/titular.entity';
import { Medicamento } from '../Medicamento/medicamento.entity';
import { MedicamentoPosto } from '../MedicamentoPosto/medicamento-posto.entity';

@Entity()
export class Solicitacao {
  @PrimaryGeneratedColumn()
  idsolicitacao: number;

  @Column({ nullable:false })
  datahora: Date;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################
  
  @ManyToOne(type => EstadoSolicitacao, estadoSolicitacao => estadoSolicitacao.solicitacao)
  @JoinColumn({name: "idestadosolicitacao"})   
  estadoSolicitacao: EstadoSolicitacao;

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