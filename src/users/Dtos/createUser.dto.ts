import { IsBoolean, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

export class createUserSettingsDto {
    @IsOptional()
    @IsBoolean()
    receiveNotifications?: boolean

    @IsOptional()
    @IsBoolean()
    receiveSms?: boolean

    @IsOptional()
    @IsBoolean()
    receiveEmail?: boolean
}

export class createUserDto {
    @IsNotEmpty()
    @IsString()
    userName: string

    @IsString()
    displayName?: string

    @IsOptional()
    @ValidateNested()//the validate nested means it will validate all the values found in the createUserSettingsDto object
    @Type(() => createUserSettingsDto)
    settings: createUserSettingsDto
}

