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
import { MedicamentoPosto } from '../MedicamentoPosto/medicamento-posto.entity';
import { Solicitacao } from '../Solicitacao/solicitacao.entity';

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

  @OneToMany(
    type => MedicamentoPosto,
    medicamentoPosto => medicamentoPosto.medicamento,
  )
  medicamentoPosto: MedicamentoPosto[];

}
