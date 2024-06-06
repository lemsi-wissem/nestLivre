import {
  IsDateString,
  IsISBN,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LivreDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  @ApiProperty({
    description: 'The title of the book',
    type: String,
    example: 'The Great Gatsby',
    required: true,
  })
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The author of the book',
    type: String,
    example: 'F. Scott Fitzgerald',
    required: true,
  })
  author: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty({
    description: 'The published date of the book',
    type: Date,
    example: '1925-04-10',
    required: true,
  })
  publishedDate: Date;

  @IsNotEmpty()
  @IsISBN()
  @ApiProperty({
    description: 'The ISBN of the book',
    type: String,
    example: '978-3-16-148410-0',
    required: true,
  })
  isbn: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The summary of the book',
    type: String,
    example:
      'The Great Gatsby is a novel by the American author F. Scott Fitzgerald.',
    required: true,
  })
  summary: string;
}
