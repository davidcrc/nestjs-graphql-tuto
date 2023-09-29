import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from '../../posts/post.entity';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field(() => [Post], { nullable: true })
  posts: Post[];
}
