import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
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
  idmedicamento: number;

  @Column({ length: 80 })
  nome: string;

  @Column({ length: 200 })
  bula: string;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToMany(type => Laboratorio)
  @JoinTable({
    name: 'medicamento_laboratorio',
    joinColumn: {
      name: 'idmedicamento',
    },
    inverseJoinColumn: {
      name: 'idlaboratorio',
    },
  })
  laboratorio: Laboratorio;

  @ManyToMany(type => Categoria)
  @JoinTable({
    name: 'medicamento_categoria',
    joinColumn: {
      name: 'idmedicamento',
    },
    inverseJoinColumn: {
      name: 'idcategoria',
    },
  })
  categoria: Categoria;

  @ManyToMany(type => Solicitacao)
  @JoinTable({
    name: 'medicamento_solicitacao',
    joinColumn: {
      name: 'idmedicamento',
    },
    inverseJoinColumn: {
      name: 'idsolicitacao',
    },
  })
  solicitacao: Solicitacao;

  @ManyToOne(
    type => EstadoMedicamento,
    estadoMedicamento => estadoMedicamento.medicamento,
  )
  @JoinColumn({ name: 'idestadomedicamento' })
  estadoMedicamento: EstadoMedicamento;

  @OneToMany(
    type => MedicamentoPosto,
    medicamentoPosto => medicamentoPosto.medicamento,
  )
  medicamentoPosto: MedicamentoPosto[];

  @ManyToOne(
    type => RecebimentoMedicamento,
    recebimentoMedicamento => recebimentoMedicamento.medicamento,
  )
  @JoinColumn({ name: 'idrecebimentomedicamento' })
  recebimentoMedicamento: RecebimentoMedicamento;
}
