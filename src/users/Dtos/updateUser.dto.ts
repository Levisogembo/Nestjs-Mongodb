import { IsOptional, IsString, isString } from "class-validator"

export class updateUserDto{
    @IsOptional()
    @IsString()
    displayName?: string

    @IsOptional()
    @IsString()
    avatarUrl?: string
}