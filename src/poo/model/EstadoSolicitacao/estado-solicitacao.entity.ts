import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class EstadoSolicitacao {
  @PrimaryGeneratedColumn()
  idEstadoSolicitacao: number;

  @Column({ nullable: false, length: 30 })
  tipo: string;
  
  // @OneToMany(type => Photo, photo => photo.user)
  // photo: Photo[];
}