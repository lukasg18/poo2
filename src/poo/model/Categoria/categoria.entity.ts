import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  idCategoria: number;

  @Column({ length: 20 })
  tipo: string;

  // @OneToMany(type => Photo, photo => photo.user)
  // photo: Photo[];
}