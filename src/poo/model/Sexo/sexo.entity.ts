import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Sexo {

  @PrimaryGeneratedColumn()
  id_sexo: number;

  @Column({ length:10 })
  tipo: string;

  // @ManyToOne(type => User, user => user.photo)
  // user: User
}