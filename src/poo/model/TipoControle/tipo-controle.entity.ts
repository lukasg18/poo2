import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import { Controle } from '../Controle/controle.entity';

@Entity()
export class TipoControle {
  @PrimaryGeneratedColumn()
  idTipoControle: number;

  @ManyToOne(type => Controle, controle => controle.tipoControle)
  controle: Controle;
}