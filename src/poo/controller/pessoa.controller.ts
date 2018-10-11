import { Get, Controller, Param } from '@nestjs/common';
import { PessoaService } from '../service/pessoa.service';


@Controller()
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get('/pessoa')
  root():any {
    return this.pessoaService.findAll();
  }

  @Get('/pessoa/:cpf')
  pegaUm(@Param() cpf) {
    return this.pessoaService.buscaCpf(cpf.cpf);
  }
}
