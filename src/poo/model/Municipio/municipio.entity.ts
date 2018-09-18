import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Municipio {
  @PrimaryGeneratedColumn()
  idMunicipio: number;

  @Column({ length: 80 })
  nome: string;

  // @OneToMany(type => Photo, photo => photo.user)
  // photo: Photo[];
}