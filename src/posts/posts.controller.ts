import { Body, Controller, Post, UsePipes, ValidationPipe, Get, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { createPostsDto } from './Dtos/createPost.dto';

@Controller('posts')
export class PostsController {
    constructor(private postSchema: PostsService){}

    @Post()
    @UsePipes(new ValidationPipe())
    createUserPost(@Body() userPost:createPostsDto){
        return this.postSchema.createPosts(userPost)
    }

    @Get()
    async getAllPosts(){
        const posts = await this.postSchema.findAllPosts()
        let hits = posts.length
        return[{hits,posts}]
    }
    //when you have two requests of the same method and same path, the first will be applied ignoring the second one
    @Get('id')
    getPostbyId(@Query('id') id:string){
        return this.postSchema.findPostById(id)   
    }
}
