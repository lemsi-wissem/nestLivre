import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Livre } from './model/livre.entity';
import { LivreService } from './service/livre.service';
import { LivreController } from './controller/livre.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Livre])],
  controllers: [LivreController],
  providers: [LivreService],
})
export class LivreModule {}
