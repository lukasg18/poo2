import { Injectable, Inject } from '@nestjs/common';
import { Titular } from '../model/titular.entity';

@Injectable()
export class TitularService{

    async readAll() {
        return await Titular.find();
      }
  
}