import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { UsersController } from './users/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.model';

@Module({
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([User])],
})
export class UsersModule {}
