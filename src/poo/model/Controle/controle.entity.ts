import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Controle {
  @PrimaryGeneratedColumn()
  idControle: number;

  @Column({ length: 100 })
  quantidade: number;

  @Column({ nullable:false })
  codigoBarras: number;

  @Column({ nullable:false, length:12 })
  data_hora: Date;

  // @OneToMany(type => Photo, photo => photo.user)
  // photo: Photo[];
}