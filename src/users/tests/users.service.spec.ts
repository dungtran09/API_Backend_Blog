import { describe } from 'node:test';
import UsersService from '../services/users.service';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import User from '../entities/user.entity';
import CreateUserDto from '../dto/createUser.dto';

describe('The UsersService', () => {
  let usersService: UsersService;
  const mockUserRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
    create: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it('should defined', async () => {
    expect(usersService).toBeDefined();
  });

  it('getAllUser => should return list of users', async () => {
    // arrange
    const users = [CreateUserDto];
    jest.spyOn(mockUserRepository, 'find').mockReturnValue(users);

    // act
    const result = await usersService.getAllUsers();

    // assert
    expect(result).toEqual(users);
    expect(mockUserRepository.find).toBeCalled();
  });

  it('getUserByEmail => should return an user', async () => {
    //arrange
    const user = CreateUserDto;
    const email = 'ngaynangnhe@gmail.com';
    jest.spyOn(mockUserRepository, 'findOne').mockReturnValue(user);

    // act
    const result = await usersService.getByEmail(email);

    // assert
    expect(result).toEqual(user);
    expect(mockUserRepository.findOne).toBeCalled();
    expect(mockUserRepository.findOne).toBeCalledWith({ where: { email } });
  });

  it('getUserById => should return an user', async () => {
    //arrange
    const id = 1;
    const user = CreateUserDto;
    jest.spyOn(mockUserRepository, 'findOne').mockReturnValue(user);

    //act
    const result = await usersService.getById(id);

    expect(result).toEqual(user);
    expect(mockUserRepository.findOne).toBeCalled();
    expect(mockUserRepository.findOne).toBeCalledWith({ where: { id } });
  });

  it('createUser => should return new user and its data', async () => {
    // arrange
    //act
    // assert
  });
});
