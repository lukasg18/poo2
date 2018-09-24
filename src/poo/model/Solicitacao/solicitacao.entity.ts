import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { EstadoSolicitacao } from '../EstadoSolicitacao/estado-solicitacao.entity';
import { Titular } from '../Titular/titular.entity';
import { Medicamento } from '../Medicamento/medicamento.entity';

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

}