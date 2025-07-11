import { IsNotEmpty, IsString, MaxLength } from "class-validator"

export class createPostsDto{
    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    title:string

    @IsNotEmpty()
    @IsString()
    @MaxLength(500)
    content: string

    @IsString()
    userId: string
}