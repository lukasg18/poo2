import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class TipoControle {
  @PrimaryGeneratedColumn()
  idTipoControle: number;

  // @OneToMany(type => Photo, photo => photo.user, {eager:true})
  // photo: Photo[];
}