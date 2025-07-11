import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersModule } from './users.module';
import { UsersService } from './users.service';
import { createUserDto } from './Dtos/createUser.dto';
import mongoose from 'mongoose';
import { updateUserDto } from './Dtos/updateUser.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Post()
    //using validation at controller level
    @UsePipes(new ValidationPipe())
    async createUser(@Body() userData: createUserDto) {
        let userName = userData.userName
        const findUser = await this.usersService.searchUserName(userName)
        if (!findUser) {
            return this.usersService.createUser(userData)
        } else {
            throw new HttpException("User Already Exists", HttpStatus.BAD_REQUEST)
        }
    }

    @Get()
    async getUsers() {
        let data = await this.usersService.getAllUsers()
        return [
            {
                hits: data.length,
                data
            }
        ]
    }

    @Get(':id')
    async getUsersByID(@Param('id') id: string) {
        //validating  the id received
        const valid = mongoose.Types.ObjectId.isValid(id)
        if (!valid) throw new HttpException("User Not Found", 404)
        const findUser = await this.usersService.getUserById(id)
        if (!findUser) throw new HttpException("User Not Found", 404)
        return findUser
    }

    //updating users
    @Patch('update/:id')
    async updateUser(@Param('id') id:string, @Body() updateUserDto: updateUserDto){
        //validating  the id received
        const valid = mongoose.Types.ObjectId.isValid(id)
        if (!valid) throw new HttpException("Invalid ID", 400)
        const findUser = await this.usersService.getUserById(id)
        if (!findUser) throw new HttpException("User Not Found", 404)
        const data = await this.usersService.updateUser(id,updateUserDto)
        return data
    }

    //deleting users
    @Delete(':id')
   async deleteUser(@Param('id') id:string){
        const valid = mongoose.Types.ObjectId.isValid(id)
        if (!valid) throw new HttpException("Invalid ID", 400)
        const findUser = await this.usersService.getUserById(id)
        if (!findUser) throw new HttpException("User Not Found", 404)
        await this.usersService.deleteUser(id)
        return {msg:"User Deleted Successfully"}
        
    }
}
