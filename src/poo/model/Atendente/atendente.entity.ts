import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Pessoa } from '../Pessoa/pessoa.entity';
import { RecebimentoMedicamento } from '../recebimentoMedicamento/recebimento-medicamento.entity';
import { Posto } from '../Posto/posto.entity';
import { Controle } from '../Controle/controle.entity';

@Entity()
export class Atendente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ nullable:false })
  data_nascimento: Date;

  @Column({ nullable:false, length:12 })
  cpf: string;

  @Column({ nullable:false })
  numero_registro: number;

  @Column({ length:20 })
  rg: string;


  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################


  @OneToMany(type => RecebimentoMedicamento, recebimentoMedicamento => recebimentoMedicamento.atedente)
  recebimentoMedicamento: RecebimentoMedicamento[];

  @ManyToOne(type => Posto, posto => posto.atendente)
  posto: Posto;

  @ManyToOne(type => Controle, controle => controle.atendente)
  controle: Controle;
}