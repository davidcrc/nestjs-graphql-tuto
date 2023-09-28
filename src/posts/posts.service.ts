import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { PrismaService } from '../prisma.service';
import { CreatePostInput } from './dto/create-post.input';

@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(): Promise<Post[]> {
    return this.prismaService.post.findMany({});
  }

  async findPostById(id: number) {
    return this.prismaService.post.findUnique({
      where: { id },
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
}
