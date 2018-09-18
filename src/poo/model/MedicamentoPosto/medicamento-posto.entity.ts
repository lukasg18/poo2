import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class MedicamentoPosto {
  @PrimaryGeneratedColumn()
  idMedicamentoPosto: number;

  // @OneToMany(type => Photo, photo => photo.user, {eager:true})
  // photo: Photo[];
}