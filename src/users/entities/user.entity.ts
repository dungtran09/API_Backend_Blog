import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Address from './address.entity';
import Post from '../../posts/entities/post.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ unique: true })
  @Expose()
  public email: string;

  @Column()
  @Expose()
  public name: string;

  @OneToOne(() => Address, { eager: true, cascade: true })
  @JoinColumn()
  public address: Address;

  @Column()
  @Exclude()
  public password: string;

  @OneToMany(() => Post, (post: Post) => post.author)
  public posts: Post[];
}

export default User;
