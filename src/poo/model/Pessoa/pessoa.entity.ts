import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;

  @Column({ nullable:false })
  cpf: number;

  @Column({ nullable:false })
  data_nascimento: Date;

  // @OneToMany(type => Photo, photo => photo.user)
  // photo: Photo[];
}