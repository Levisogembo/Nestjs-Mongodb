import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/schemas/user.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSettingsSchema, userSettingsSchema } from 'src/schemas/userSettings.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name:User.name,
            schema: userSchema
        }, {
            name: userSettingsSchema.name,
            schema: UserSettingsSchema
        }])
    ],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}
