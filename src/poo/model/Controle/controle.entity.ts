import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Atendente } from '../Atendente/atendente.entity';
import { TipoControle } from '../TipoControle/tipo-controle.entity';
import { MedicamentoPosto } from '../MedicamentoPosto/medicamento-posto.entity';

@Entity()
export class Controle {
  @PrimaryGeneratedColumn()
  idControle: number;

  @Column({ nullable: false })
  quantidade: number;

  @Column({ nullable:false })
  codigoBarras: number;

  @Column({ nullable:false })
  data_hora: Date;

  @OneToMany(type => Atendente, atendente => atendente.controle)
  atendente: Atendente[];

  @OneToMany(type => TipoControle, tipoControle => tipoControle.controle)
  tipoControle: TipoControle[];

  @ManyToOne(type => MedicamentoPosto, medicamentoPosto => medicamentoPosto.controle)
  medicamentoPosto: MedicamentoPosto;
}