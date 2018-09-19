import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Solicitacao } from '../Solicitacao/solicitacao.entity';

@Entity()
export class EstadoSolicitacao {
  @PrimaryGeneratedColumn()
  idEstadoSolicitacao: number;

  @Column({ nullable: false, length: 30 })
  tipo: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################
  
  @OneToMany(type => Solicitacao, solicitacao => solicitacao.estadoSolicitacao)
  solicitacao: Solicitacao[];
}