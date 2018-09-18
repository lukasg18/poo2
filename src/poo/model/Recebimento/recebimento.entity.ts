import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Recebimento {
  @PrimaryGeneratedColumn()
  idRecebimento: number;

  @Column({ nullable: false })
  quantidadeMedicamentos: number;

  @Column({ nullable: false })
  data_hora: Date;

  // @OneToMany(type => Photo, photo => photo.user, {eager:true})
  // photo: Photo[];
}