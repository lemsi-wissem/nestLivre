import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;
  @Column()
  username: string;
  @Column()
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
