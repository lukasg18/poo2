import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Laboratorio {
  @PrimaryGeneratedColumn()
  idLaboratorio: number;

  @Column({ length: 30 })
  nome: string;

}