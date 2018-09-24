import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  idcategoria: number;

  @Column({ length: 20 })
  tipo: string;

}