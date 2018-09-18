import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Pessoa } from '../Pessoa/pessoa.entity';

@Entity()
export class Titular {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ nullable:false })
  data_nascimento: Date;

  @Column({ nullable:false, length:12 })
  cpf: string;

  @Column({ nullable:false })
  numero_SUS: number;

  @Column({ nullable:false })
  rg: number;

  @OneToMany(type => Pessoa, depedente => depedente.titular, { eager:true })
  depedente: Pessoa[]
}