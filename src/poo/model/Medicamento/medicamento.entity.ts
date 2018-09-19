import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Laboratorio } from '../Laboratorio/laboratorio.entity';
import { Categoria } from '../Categoria/categoria.entity';
import { Recebimento } from '../Recebimento/recebimento.entity';
import { EstadoMedicamento } from '../EstadoMedicamento/estado-medicamento.entity';
import { MedicamentoPosto } from '../MedicamentoPosto/medicamento-posto.entity';
import { Solicitacao } from '../Solicitacao/solicitacao.entity';
import { RecebimentoMedicamento } from '../recebimentoMedicamento/recebimento-medicamento.entity';

@Entity()
export class Medicamento {
  @PrimaryGeneratedColumn()
  idMedicamento: number;

  @Column({ length: 80 })
  nome: string;

  @Column({ length: 200 })
  bula: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToMany(type => Laboratorio)
  @JoinTable({name: "Medicamento_Laboratorio"})
  laboratorio: Laboratorio;

  @ManyToMany(type => Categoria)
  @JoinTable({name: "Medicamento_Categoria"})
  categoria: Categoria;

  @ManyToMany(type => Solicitacao)
  @JoinTable({name: "Medicamento_Solicitacao"})
  solicitacao: Solicitacao;

  @ManyToOne(type => EstadoMedicamento, estadoMedicamento => estadoMedicamento.medicamento)
  estadoMedicamento: EstadoMedicamento;

  @OneToMany(type => MedicamentoPosto, medicamentoPosto => medicamentoPosto.medicamento)
  medicamentoPosto: MedicamentoPosto[];

  @ManyToOne(type => RecebimentoMedicamento, recebimentoMedicamento => recebimentoMedicamento.medicamento)
  recebimentoMedicamento: RecebimentoMedicamento;

}