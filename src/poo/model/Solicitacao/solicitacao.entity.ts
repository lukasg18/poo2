import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { EstadoSolicitacao } from '../EstadoSolicitacao/estado-solicitacao.entity';
import { Titular } from '../Titular/titular.entity';
import { Medicamento } from '../Medicamento/medicamento.entity';

@Entity()
export class Solicitacao {
  @PrimaryGeneratedColumn()
  idSolicitacao: number;

  @Column({ nullable:false })
  data_hora: Date;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################
  
  @ManyToOne(type => EstadoSolicitacao, estadoSolicitacao => estadoSolicitacao.solicitacao)
  @JoinColumn({name: "idEstadoSolicitacao"})   
  estadoSolicitacao: EstadoSolicitacao;

  @ManyToOne(type => Titular, titular => titular.solicitacao)
  @JoinColumn({name: "idTitular"})   
  titular: Titular

}