import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePostInput } from './dto/create-post.input';
import { AuthorsService } from '../authors/authors.service';
import { Post, User } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(forwardRef(() => AuthorsService))
    private readonly authorService: AuthorsService,
  ) {}

  findAll(): Promise<Post[]> {
    return this.prismaService.post.findMany();
  }

  async findPostById(id: number) {
    return this.prismaService.post.findUnique({
      where: { id },
    });
  }

  findPostByUser(userId: number) {
    return this.prismaService.post.findMany({
      where: { author: { id: userId } },
    });
  }

  createPost(post: CreatePostInput) {
    const newPost = this.prismaService.post.create({
      data: {
        ...post,
      },
    });

    return newPost;
  }

  getAuthor(userId: number): Promise<User> | null {
    if (!userId) {
      return null;
    }

    return this.authorService.findOne(userId);
  }
}
