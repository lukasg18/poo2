import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { EstadoSolicitacao } from '../EstadoSolicitacao/estado-solicitacao.entity';
import { Titular } from '../Titular/titular.entity';
import { Medicamento } from '../Medicamento/medicamento.entity';

@Entity()
export class Solicitacao {
  @PrimaryGeneratedColumn()
  idSolicitacao: number;

  @Column({ nullable:false })
  data_hora: Date;
  
  @ManyToOne(type => EstadoSolicitacao, estadoSolicitacao => estadoSolicitacao.solicitacao)
  estadoSolicitacao: EstadoSolicitacao;

  @ManyToOne(type => Titular, titular => titular.solicitacao)
  titular: Titular

  @OneToMany(type => Medicamento, medicamento => medicamento.solicitacao)
  medicamento: Medicamento[];

}