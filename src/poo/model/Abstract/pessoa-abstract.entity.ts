import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

export abstract class PessoaAbs{

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 100 })
    nome: string;
  
    @Column({ nullable:false })
    datanascimento: Date;
  
    @Column({ nullable:false, length:12 })
    cpf: string;

    @Column({ nullable:false })
    rg: number;

    @Column({ nullable:false })
    sexo: number;
}