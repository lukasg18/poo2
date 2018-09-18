import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Posto {
  @PrimaryGeneratedColumn()
  idPosto: number;

  @Column({ length: 200 })
  complemento: string;

  @Column({ nullable:false })
  cep: number;

  @Column({ nullable:false })
  numero: number;

  @Column({ length: 20 })
  coordGeoLong: string;

  @Column({ length: 20 })
  coordGeoLat: string;

  // @OneToMany(type => Photo, photo => photo.user)
  // photo: Photo[];
}