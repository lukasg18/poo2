import { Injectable, Inject } from '@nestjs/common';
import { Titular } from '../model/titular.entity';
import { genericService } from './generic-service/generic.service';

@Injectable()
export class TitularService extends genericService<Titular>{
  
}