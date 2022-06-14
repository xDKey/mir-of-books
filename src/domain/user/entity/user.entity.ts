import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { BaseEntity } from 'src/domain/common/database/base.entity';
import { BookEntity } from 'src/domain/book/entity/book.entity';

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @OneToMany(() => BookEntity, (book) => book.user)
  books: BookEntity[];

  @OneToOne(() => BookEntity, (book) => book.user)
  activeBook: BookEntity;
}
