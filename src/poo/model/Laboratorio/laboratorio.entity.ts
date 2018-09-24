import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Laboratorio {
  @PrimaryGeneratedColumn()
  idlaboratorio: number;

  @Column({ length: 30 })
  nome: string;

}