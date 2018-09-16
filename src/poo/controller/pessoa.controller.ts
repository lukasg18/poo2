import { Get, Controller } from '@nestjs/common';
import { PessoaService } from '../service/pessoa.service';
import { UserService } from '../service/user.service';


@Controller()
export class PessoaController {
  constructor(private readonly appService: UserService) {}

  @Get('/pessoa')
  root():any {
    return this.appService.findAll();
  }
}
