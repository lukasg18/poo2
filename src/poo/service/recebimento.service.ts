import { Injectable, Inject } from '@nestjs/common';
import { Recebimento } from '../model/recebimento.entity';

@Injectable()
export class RecebimentoService{

    async readAll() {
        return await Recebimento.find();
    }
    
    async readOne(id:number) {
        return await Recebimento.findOne({idrecebimento:id});
	}
	  
    async Create(body: any){
		let receb = new Recebimento();
		receb.atendente = body.atendente;
		receb.data_hora = body.data_hora;
		receb.idrecebimento = body.idrecebimento;
		receb.medicamentoPosto = body.medicamentoPosto;
		receb.pessoa = body.pessoa;
		receb.quantidademedicamentos = body.quantidademedicamentos;
		return await Recebimento.save(receb);
    }

	async Drop(body: any): Promise<Recebimento> {
		let receb = new Recebimento();
		let busca;
		receb.idrecebimento = body.idrecebimento;
		try {
			busca = await Recebimento.findOne({
				idrecebimento: receb.idrecebimento
			});
			return await Recebimento.remove(busca);
		} catch (err) {
			throw new Error(
				`Erro ao tentar remover recebimento\n Erro: ${err.name}\n Mensagem: ${
					err.message
				}\n Os parametros estao certos?`
			);
		}
	}
	
    async Update(body) {
		let receb = new Recebimento();
		receb.idrecebimento = body.idrecebimento;
		let busca = await Recebimento.findOne({ idrecebimento: receb.idrecebimento });
		receb.atendente = body.atendente;
		receb.data_hora = body.data_hora;
		receb.medicamentoPosto = body.medicamentoPosto;
		receb.pessoa = body.pessoa;
		receb.quantidademedicamentos = body.quantidademedicamentos;
		return await Recebimento.save(busca);
    }
    
}