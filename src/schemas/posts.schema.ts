import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class posts {
    @Prop({required: true,unique:true})
    title: string

    @Prop({required: true})
    content: string
}

export const postsSchema = SchemaFactory.createForClass(posts)