import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { BaseEntity } from 'src/domain/common/database/base.entity';
import { GenreEntity } from 'src/domain/book/entity/genre.entity';
import { UserEntity } from 'src/domain/user/entity/user.entity';

@Entity()
export class BookEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  title: string;

  @PrimaryColumn({ type: 'varchar', length: 255 })
  author: string;

  @Column({ type: 'text' })
  content: string;

  @ManyToMany(() => GenreEntity, (genre) => genre.books)
  @JoinTable()
  genres: GenreEntity[];

  @ManyToOne(() => UserEntity, (user) => user.books)
  user: UserEntity;

  @OneToOne(() => UserEntity, (user) => user.activeBook)
  activeUser: UserEntity;
}
