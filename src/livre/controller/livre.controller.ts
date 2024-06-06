import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LivreService } from '../service/livre.service';
import { Livre } from '../model/livre.entity';
import { LivreDto } from '../dto/livre.dto';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('livre')
@ApiTags('Livre')
export class LivreController {
  constructor(private livreService: LivreService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: LivreDto })
  async createLivre(@Body() livreDto: LivreDto): Promise<Livre> {
    return this.livreService.create(livreDto);
  }

  @Get()
  async getAllLivres(): Promise<Livre[]> {
    return this.livreService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: Number })
  async getLivreById(@Param('id') id: number): Promise<Livre | null> {
    return this.livreService.findOne(id);
  }

  @Put(':id')
  async updateLivre(
    @Param('id') id: number,
    @Body() livre: Livre,
  ): Promise<Livre | null> {
    return this.livreService.update(id, livre);
  }

  @Delete(':id')
  async deleteLivre(@Param('id') id: number): Promise<void> {
    return this.livreService.remove(id);
  }
}
