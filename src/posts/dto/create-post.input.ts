import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreatePostInput {
  @MinLength(5, {
    message: 'title is too short',
  })
  @MaxLength(100, {
    message: 'title is too long',
  })
  @IsNotEmpty()
  @Field()
  title: string;

  @MaxLength(500)
  @Field({ nullable: true })
  content?: string;

  @IsInt()
  @Field(() => Int)
  authorId: number;
}
