import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsInt } from 'class-validator';
import { Author } from '../authors/entities/author.entity';

@ObjectType()
export class Post {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field({ nullable: true })
  content?: string;

  @IsBoolean()
  @Field()
  published?: boolean;

  @IsInt()
  @Field(() => Int, { nullable: true })
  authorId: number;

  @Field(() => Author, { nullable: true })
  author?: Author;
}
