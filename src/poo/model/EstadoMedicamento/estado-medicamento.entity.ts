import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class EstadoMedicamento {
  @PrimaryGeneratedColumn()
  idEstadoMedicamento: number;

  @Column({ length: 30 })
  tipo: string;

  // @OneToMany(type => Photo, photo => photo.user, {eager:true})
  // photo: Photo[];
}