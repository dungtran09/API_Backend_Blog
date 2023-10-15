import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import CreateUserDto from '../dto/createUser.dto';
import UsersService from '../services/users.service';

@Controller('users')
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  async getAllUsers() {
    return this.usersService.getAllUser();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.usersService.getById(Number(id));
  }

  @Get()
  async getByEmail(@Param('email') email: string) {
    return this.usersService.getByEmail(email);
  }

  @Post()
  async register(@Body() userData: CreateUserDto) {
    return this.usersService.createUser(userData);
  }
}
