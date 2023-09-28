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

  createPost(post: CreatePostInput) {
    const newPost = this.prismaService.post.create({
      data: {
        ...post,
      },
    });

    return newPost;
  }
}
