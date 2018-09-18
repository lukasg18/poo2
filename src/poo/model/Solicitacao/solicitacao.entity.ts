import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Solicitacao {
  @PrimaryGeneratedColumn()
  idSolicitacao: number;

  @Column({ nullable:false })
  data_hora: Date;
  
  // @OneToMany(type => Photo, photo => photo.user)
  // photo: Photo[];
}