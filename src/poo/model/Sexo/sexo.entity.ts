import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Sexo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length:20 })
  tipo: string;

  // @ManyToOne(type => User, user => user.photo)
  // user: User
}