import { Module, forwardRef } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PrismaService } from '../prisma.service';
import { AuthorsModule } from '../authors/authors.module';

@Module({
  imports: [forwardRef(() => AuthorsModule)],
  providers: [PostsService, PostsResolver, PrismaService],
  exports: [PostsService],
})
export class PostsModule {}
