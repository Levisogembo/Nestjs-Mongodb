import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { posts } from 'src/schemas/posts.schema';
import { createPostsDto } from './Dtos/createPost.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class PostsService {
    constructor(@InjectModel(posts.name) private postsSchema: Model<posts>, 
                @InjectModel(User.name) private usersSchema: Model <User>
    ) {}

    async createPosts({userId,...createPostData}:createPostsDto){
        const findUser =  await this.usersSchema.findById(userId)
        if(!findUser) throw new HttpException("user not found",HttpStatus.NOT_FOUND)
        let newPost = new this.postsSchema(createPostData)
        const savedPost = await newPost.save()
        await findUser.updateOne({$push:{
            posts: savedPost._id
        }})
        return savedPost
    }

    async findPostById(id:string){
        const findPost = await this.postsSchema.findById(id)
        if(!findPost) throw new HttpException("Post Not Found", HttpStatus.NOT_FOUND)
        return findPost

    }

    async findAllPosts(){
        return await this.postsSchema.find()
    }
}
