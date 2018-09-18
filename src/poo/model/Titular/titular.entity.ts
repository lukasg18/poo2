import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Pessoa } from '../Pessoa/pessoa.entity';

@Entity()
export class Titular extends Pessoa{

  @Column({ nullable:false })
  numero_SUS: number;

  @Column({ length:20 })
  rg: string;

  // @ManyToOne(type => User, user => user.photo)
  // user: User
}