import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Solicitacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable:false })
  data: Date;
  
  // @OneToMany(type => Photo, photo => photo.user)
  // photo: Photo[];
}