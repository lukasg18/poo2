import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Medicamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;

  @Column('text')
  bula: string;

  // @OneToMany(type => Photo, photo => photo.user, {eager:true})
  // photo: Photo[];
}