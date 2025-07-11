import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { posts, postsSchema } from 'src/schemas/posts.schema';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { User, userSchema } from 'src/schemas/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: posts.name,
                schema: postsSchema
            },
            {
                name: User.name,
                schema: userSchema
            }
        ])
    ],
    providers: [PostsService],
    controllers: [PostsController]
})
export class PostsModule {}
