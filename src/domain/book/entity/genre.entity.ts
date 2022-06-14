import { Column, Entity, ManyToMany } from 'typeorm';
import { BookEntity } from 'src/domain/book/entity/book.entity';
import { BaseEntity } from 'src/domain/common/database/base.entity';

@Entity()
export class GenreEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToMany(() => BookEntity, (book) => book.genres)
  books: BookEntity[];
}
