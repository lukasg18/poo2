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
import { RecebimentoMedicamentoPosto } from '../recebimentoMedicamento/recebimento-medicamento.entity';
import { EntradaMedicamento } from '../EntradaMedicamento/entrada-medicamento.entity';

@Entity()
export class MedicamentoPosto {
  @PrimaryGeneratedColumn()
  idmedicamentoposto: number;

  @Column({ nullable: false })
  estadomedicamento: number;

  @Column({ nullable: false })
  quantidade: number;

  @Column({ nullable: false })
  datavencimento: Date;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Posto, posto => posto.medicamentoPosto)
  @JoinColumn({ name: 'idposto' })
  posto: Posto;

  @ManyToOne(type => Medicamento, medicamento => medicamento.medicamentoPosto)
  @JoinColumn({ name: 'idmedicamento' })
  medicamento: Medicamento;

  @OneToMany(type => EntradaMedicamento, entradaMedicamento => entradaMedicamento.medicamentoPosto)
  entradaMedicamento: EntradaMedicamento[];

  @OneToMany(
    type => RecebimentoMedicamentoPosto,
    recebimentoMedicamentoPosto => recebimentoMedicamentoPosto.medicamentoPosto,
  )
  recebimentoMedicamentoPosto: RecebimentoMedicamentoPosto[];
}
