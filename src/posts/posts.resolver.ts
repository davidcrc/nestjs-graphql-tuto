import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { Author } from '../authors/entities/author.entity';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  // @Query((returns) => [Post]) -- reference
  @Query(() => [Post])
  posts() {
    return this.postsService.findAll();
  }

  @Query(() => Post, { nullable: true })
  post(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findPostById(id);
  }

  @ResolveField(() => Author)
  author(@Parent() post: Post) {
    return this.postsService.getAuthor(post.authorId);
  }

  @Mutation(() => Post)
  createPost(@Args('postInput') postInput: CreatePostInput) {
    return this.postsService.createPost(postInput);
  }
}
