import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class EstadoSolicitacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 20 })
  tipo: string;
  
  // @OneToMany(type => Photo, photo => photo.user)
  // photo: Photo[];
}