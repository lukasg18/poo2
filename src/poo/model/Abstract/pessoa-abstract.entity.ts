import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';

export abstract class PessoaAbs{

    @PrimaryGeneratedColumn()
    idpessoa: number;
  
    @Column({ length: 100 })
    nome: string;
  
    @Column({ nullable:false })
    datanascimento: Date;
  
    @Column({ nullable:false, length:12 })
    cpf: string;

    @Column({ nullable:false })
    sexo: number;

    @Column({ nullable:false })
    rg: number;

}