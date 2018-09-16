import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('PhotoRepositoryToken')
    private readonly photoRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.photoRepository.find();
  }
}