import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Posto } from '../Posto/posto.entity';
import { Medicamento } from '../Medicamento/medicamento.entity';
import { Lote } from '../Lote/lote.entity';
import { Controle } from '../Controle/controle.entity';
import { RecebimentoMedicamentoPosto } from '../recebimentoMedicamento/recebimento-medicamento.entity';

@Entity()
export class MedicamentoPosto {
  @PrimaryGeneratedColumn()
  idmedicamentoposto: number;

  @Column({ nullable: false })
  estadomedicamento: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Posto, posto => posto.medicamentoPosto)
  @JoinColumn({ name: 'idposto' })
  posto: Posto;

  @ManyToOne(type => Medicamento, medicamento => medicamento.medicamentoPosto)
  @JoinColumn({ name: 'idmedicamento' })
  medicamento: Medicamento;

  @ManyToOne(type => Lote, lote => lote.medicamentoPosto)
  @JoinColumn({ name: 'idlote' })
  lote: Lote;

  @OneToMany(type => Controle, controle => controle.medicamentoPosto)
  controle: Controle[];

  @OneToMany(
    type => RecebimentoMedicamentoPosto,
    recebimentoMedicamentoPosto => recebimentoMedicamentoPosto.medicamentoPosto,
  )
  recebimentoMedicamentoPosto: RecebimentoMedicamentoPosto[];
}
