import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Int, { nullable: true })
  authorId: number;
}
