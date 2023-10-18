import { Test, TestingModule } from '@nestjs/testing';
import UsersController from '../controllers/users.controller';
import UsersService from '../services/users.service';
import CreateUserDto from '../dto/createUser.dto';

describe('UsersController', () => {
  let usersController: UsersController;

  const mockUsersService = {
    getAllUsers: jest.fn(),
    getById: jest.fn(),
    getByEmail: jest.fn(),
    createUser: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });

  it('getAllUsers => should return list of users', async () => {
    //arrange
    const user = CreateUserDto;
    const users = [user];
    jest.spyOn(mockUsersService, 'getAllUsers').mockReturnValue(users);

    //act
    const result = await usersController.getAllUsers();

    // assert
    expect(result).toEqual(users);
    expect(mockUsersService.getAllUsers).toBeCalled();
  });

  it('getUserById => should return a user', async () => {
    //arrange
    const id = '1';
    const user = CreateUserDto;
    jest.spyOn(mockUsersService, 'getById').mockReturnValue(user);

    //act
    const result = await usersController.getUserById(id);

    expect(result).toEqual(user);
    expect(mockUsersService.getById).toBeCalled();
    expect(mockUsersService.getById).toBeCalledWith(+id);
  });

  it('getUserByEmail => should return a user', async () => {
    //arrange
    const email = 'ngaynangnhe@gmail.com';
    const user = CreateUserDto;
    jest.spyOn(mockUsersService, 'getByEmail').mockReturnValue(user);

    //act
    const result = await usersController.getUserByEmail(email);

    expect(result).toEqual(user);
    expect(mockUsersService.getByEmail).toBeCalled();
    expect(mockUsersService.getByEmail).toBeCalledWith(email);
  });

  it('register => should return new user and its data', async () => {
    // arrange
    // act
    // assert
  });
});
