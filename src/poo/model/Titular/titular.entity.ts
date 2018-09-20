import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Pessoa } from '../Pessoa/pessoa.entity';
import { Solicitacao } from '../Solicitacao/solicitacao.entity';
import { Recebimento } from '../Recebimento/recebimento.entity';
import { Depedente } from '../Depedente/depedente.entity';
import { PessoaAbs } from '../Abstract/pessoa-abstract.entity';

@Entity()
export class Titular extends PessoaAbs{

  @Column({ nullable:false })
  numero_SUS: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @OneToMany(type => Depedente, depedente => depedente.titular, { eager:true })
  depedente: Depedente[];

  @OneToMany(type => Solicitacao, solicitacao => solicitacao.titular, { eager:true })
  solicitacao: Solicitacao[];

  @ManyToOne(type => Pessoa, pessoa => pessoa.titular)
  @JoinColumn({name: "idPessoa"})
  pessoa: Pessoa;
}