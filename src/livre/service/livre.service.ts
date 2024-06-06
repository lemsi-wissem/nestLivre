import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Livre } from '../model/livre.entity';
import { Repository } from 'typeorm';
import { LivreDto } from '../dto/livre.dto';

@Injectable()
export class LivreService {
  constructor(
    @InjectRepository(Livre) private livreRepository: Repository<Livre>,
  ) {}

  findAll(): Promise<Livre[]> {
    return this.livreRepository.find();
  }

  async findOne(id: number): Promise<Livre> {
    const livre = await this.livreRepository.findOneBy({ id });
    if (!livre) {
      throw new NotFoundException(`Livre with ID ${id} not found`);
    }
    return livre;
  }

  async remove(id: number): Promise<void> {
    const result = await this.livreRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Livre with ID ${id} not found`);
    }
  }

  async create(livreDto: LivreDto): Promise<Livre> {
    const livre = this.livreRepository.create(livreDto);
    if (!livre) {
      throw new BadRequestException('Failed to create a new Livre');
    }
    return this.livreRepository.save(livre);
  }

  async update(id: number, livreDto: LivreDto): Promise<Livre> {
    const livre = await this.livreRepository.findOneBy({ id });
    if (!livre) {
      throw new NotFoundException(`Livre with ID ${id} not found`);
    }
    return this.livreRepository.save({ ...livre, ...livreDto });
  }
}
