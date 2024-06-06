import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Livre {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  author: string;
  @Column()
  publishedDate: Date;
  @Column()
  isbn: string;
  @Column()
  summary: string;
}
