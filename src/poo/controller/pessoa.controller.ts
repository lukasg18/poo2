import { Get, Controller } from '@nestjs/common';
import { PessoaService } from '../model/Pessoa/pessoa.service';


@Controller()
export class PessoaController {
  constructor(private readonly appService: PessoaService) {}

  @Get('/pessoa')
  root():any {
    return this.appService.findAll();
  }
}
