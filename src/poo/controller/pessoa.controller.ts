import { Get, Controller } from '@nestjs/common';
import { PessoaService } from '../service/pessoa.service';


@Controller()
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get('/pessoa')
  root():any {
    return this.pessoaService.findAll();
  }
}
