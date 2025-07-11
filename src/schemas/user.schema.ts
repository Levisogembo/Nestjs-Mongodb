import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { userSettingsSchema } from "./userSettings.schema";
import { posts } from "./posts.schema";

@Schema()
export class User{
    //defining the fields in the user model
    @Prop({unique:true, required:true})
    userName: string

    @Prop({required:false})
    displayName?: string

    @Prop({required: false})
    avatarUrl?: string

    //encapsulating the user settings, it is like a one to one relationship in this case
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'userSettingsSchema'})
    userSettings: userSettingsSchema

    //creating a one to many relationship with the posts schema
    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'posts'}], ref: 'posts'})
    posts: posts[]//returning an array of posts
}
//creating the actual schema
export const userSchema = SchemaFactory.createForClass(User)