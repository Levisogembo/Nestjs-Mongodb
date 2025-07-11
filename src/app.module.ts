import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    //importing the database
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest_tutorial'),
    UsersModule,
    PostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
