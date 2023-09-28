import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Post[]> {
    return this.prisma.post.findMany({});
  }
}
