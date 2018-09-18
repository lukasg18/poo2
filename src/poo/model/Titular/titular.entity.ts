import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Pessoa } from '../Pessoa/pessoa.entity';

@Entity()
export class Titular extends Pessoa{

  @Column({ nullable:false })
  numero_SUS: number;

  @Column({ nullable:false })
  rg: number;

  // @ManyToOne(type => User, user => user.photo)
  // user: User
}