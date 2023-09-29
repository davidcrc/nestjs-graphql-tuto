## Modules

```bash
nest g module posts
```

```bash
nest g service posts
```

```bash
nest g resolver posts
```

## Add graphql - CHECK UPDATE all dependencies in packgage.json

- https://docs.nestjs.com/graphql/quick-start

```bash
pnpm i @nestjs/graphql @nestjs/apollo @apollo/server graphql
```

- WE can use code first or Schema first, it depends from project (code first )

## Add Prisma

```bash
pnpm i prisma --save-dev
```

```bash
npx prisma init
```

```bash
pnpm i @prisma/client
```

- create prisma.service.ts

```ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
```

- Add PrismaService to PostsModule:

```ts
@Module({
  providers: [PostsService, PostsResolver, PrismaService],
})
export class PostsModule {}
```

- Then create models for prisma

```bash
npx prisma migrate dev --name init
```

## Add validations

```bash
pnpm i --save class-validator class-transformer
```

- add on main.ts

```ts
app.useGlobalPipes(new ValidationPipe());
```

## Resource

- graphql-api code first

```bash
nest g resource authors
```

- NOTE: for cycle dependecy add:

https://docs.nestjs.com/fundamentals/circular-dependency
