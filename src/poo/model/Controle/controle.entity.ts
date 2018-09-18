import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Controle {
  @PrimaryGeneratedColumn()
  idControle: number;

  @Column({ nullable: false })
  quantidade: number;

  @Column({ nullable:false })
  codigoBarras: number;

  @Column({ nullable:false })
  data_hora: Date;

  // @OneToMany(type => Photo, photo => photo.user)
  // photo: Photo[];
}