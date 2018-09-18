import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Medicamento {
  @PrimaryGeneratedColumn()
  idMedicamento: number;

  @Column({ length: 80 })
  nome: string;

  @Column({ length: 200 })
  bula: string;

  // @OneToMany(type => Photo, photo => photo.user, {eager:true})
  // photo: Photo[];
}