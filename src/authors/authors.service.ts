import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { PrismaService } from '../prisma.service';
import { Post } from '../posts/post.entity';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class AuthorsService {
  constructor(
    @Inject(forwardRef(() => PostsService))
    private readonly postsService: PostsService,
    private readonly prismaService: PrismaService,
  ) {}

  create(createAuthorInput: CreateAuthorInput) {
    return this.prismaService.user.create({
      data: {
        ...createAuthorInput,
      },
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return this.prismaService.user.update({
      where: { id },
      data: {
        ...updateAuthorInput,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.user.delete({ where: { id } });
  }

  getPostByAuthor(postId: number): Promise<Post[]> | null {
    if (!postId) {
      return null;
    }

    return this.postsService.findPostByUser(postId);
  }
}
