import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Bairro {
  @PrimaryGeneratedColumn()
  idBairro: number;

  @Column({ length: 30 })
  nome: string;

  // @OneToMany(type => Photo, photo => photo.user)
  // photo: Photo[];
}