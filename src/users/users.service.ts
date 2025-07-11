import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { createUserDto } from './Dtos/createUser.dto';
import { updateUserDto } from './Dtos/updateUser.dto';
import { userSettingsSchema } from 'src/schemas/userSettings.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(userSettingsSchema.name) private userSettingsModel: Model<userSettingsSchema>
    ) { }
    //defining methods that will interact with the user database
    async createUser({ settings, ...createUserDto }: createUserDto) {
        //checking if the user settings are provided
        if (settings) {
            const newUserSettings = new this.userSettingsModel(settings)
            const savedUserSettings = await newUserSettings.save()
            const newUser = new this.userModel({ ...createUserDto, userSettings: savedUserSettings._id })
            return await newUser.save()
        }
        //creating a new user
        const newUser = new this.userModel(createUserDto)
        return newUser.save()
    }

    getAllUsers() {
        return this.userModel.find().populate(['userSettings','posts'])
    }

    getUserById(id: string) {
        return this.userModel.findById(id).populate('userSettings')
    }

    searchUserName(userName: string) {
        return this.userModel.findOne({ userName })
    }

    updateUser(id: string, updateUserDto: updateUserDto) {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true })//
        //when you set the new to true you will return the updated document instead of the old one in the db
    }

    deleteUser(id) {
        return this.userModel.findByIdAndDelete(id)
    }
}
