import AuthenticationService from '../services/authentication.service';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import User from '../../users/entities/user.entity';
import UsersService from '../../users/services/users.service';
import mockedConfigService from '../../utils/mocks/config.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import mockedJwtService from '../../utils/mocks/jwt.service';

describe('The AuthenticationService', () => {
  let authenticationService: AuthenticationService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UsersService,
        AuthenticationService,
        {
          provide: ConfigService,
          useValue: mockedConfigService,
        },
        {
          provide: JwtService,
          useValue: mockedJwtService,
        },
        {
          provide: getRepositoryToken(User),
          useValue: {},
        },
      ],
    }).compile();

    authenticationService = await module.get(AuthenticationService);
  });

  describe('when created cookie', () => {
    it('Should return an string', () => {
      const userId = 1;
      expect(
        typeof authenticationService.getCookieWidthJwtToken(userId),
      ).toEqual('string');
    });
  });
});
