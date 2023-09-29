import { Module, forwardRef } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { PrismaService } from '../prisma.service';
import { PostsModule } from '../posts/posts.module';

@Module({
  imports: [forwardRef(() => PostsModule)],
  providers: [AuthorsResolver, AuthorsService, PrismaService],
  exports: [AuthorsService],
})
export class AuthorsModule {}
