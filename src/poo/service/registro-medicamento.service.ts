import { Injectable, Inject } from '@nestjs/common';
import { RegistroMedicamento } from '../model/registro-medicamento.entity'

@Injectable()
export class RegMedService{

    async readAll() {
        return await RegistroMedicamento.find();
    }
    
    async readOne(id:number) {
        return await RegistroMedicamento.findOne({idregistromedicamento:id});
	}
	  
    async Create(body: any){
		let regmed = new RegistroMedicamento();
		regmed.atendente = body.atendente;
		regmed.data_hora = body.data_hora;
		regmed.medicamentoPosto = body.medicamentoPosto;
		regmed.quantidade = body.quantidade;
		return await RegistroMedicamento.save(regmed);
    }

	async Drop(body: any): Promise<RegistroMedicamento> {
		let regmed = new RegistroMedicamento();
		let busca;
		regmed.idregistromedicamento = body.idlaboratorio;
		try {
			busca = await RegistroMedicamento.findOne({
				idregistromedicamento: regmed.idregistromedicamento
			});
			return await RegistroMedicamento.remove(busca);
		} catch (err) {
			throw new Error(
				`Erro ao tentar remover registro-medicamento\n Erro: ${err.name}\n Mensagem: ${
					err.message
				}\n Os parametros estao certos?`
			);
		}
	}
	
    async Update(body) {
		let regmed = new RegistroMedicamento();
		regmed.idregistromedicamento = body.idregistromedicamento;
		let busca = await RegistroMedicamento.findOne({ idregistromedicamento: regmed.idregistromedicamento });
		busca.atendente = body.atendente;
		busca.data_hora = body.data_hora;
		busca.quantidade = body.quantidade;
		busca.medicamentoPosto = body.medicamentoPosto;
		return await RegistroMedicamento.save(busca);
    }
    
}