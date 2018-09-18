import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Titular } from '../Titular/titular.entity';

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ nullable:false })
  data_nascimento: Date;

  @Column({ nullable:false, length:12 })
  cpf: string;

  @ManyToOne(type => Titular, titular => titular.depedente)
  titular: Titular;
}