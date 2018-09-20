import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Posto } from '../Posto/posto.entity';
import { Medicamento } from '../Medicamento/medicamento.entity';
import { Lote } from '../Lote/lote.entity';
import { Controle } from '../Controle/controle.entity';

@Entity()
export class MedicamentoPosto {
  @PrimaryGeneratedColumn()
  idMedicamentoPosto: number;

  //###################################################################
  //############################ RELAÇÕES #############################
  //###################################################################

  @ManyToOne(type => Posto, posto => posto.medicamentoPosto)
  @JoinColumn({name: "idPosto"})
  posto: Posto;

  @ManyToOne(type => Medicamento, medicamento => medicamento.medicamentoPosto)
  @JoinColumn({name: "idMedicamento"})
  medicamento: Medicamento;

  @ManyToOne(type => Lote, lote => lote.medicamentoPosto)
  @JoinColumn({name: "idLote"})
  lote: Lote;

  @OneToMany(type => Controle, controle => controle.medicamentoPosto)
  controle: Controle[];
}