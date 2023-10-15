import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  Res,
  SerializeOptions,
  UseGuards,
} from '@nestjs/common';
import AuthenticationService from '../services/authentication.service';
import RegisterDto from '../dto/register.dto';
import LocalAuthenticationGuard from '../guards/localAuthentication.guard';
import RequestWidthUser from '../interfaces/requestWidthUser.interface';
import JwtAuthenticationGuard from '../guards/jwt-authentication.guard';
import ResponseWidthUser from '../interfaces/responseWidthUser.interface';

@Controller('authentication')
@SerializeOptions({ strategy: 'excludeAll' })
export default class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('register')
  async register(@Body() registrationData: RegisterDto) {
    return this.authenticationService.register(registrationData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthenticationGuard)
  @Post('log-in')
  async logIn(@Req() request: RequestWidthUser) {
    const user = request.user;
    const cookie = this.authenticationService.getCookieWidthJwtToken(user.id);
    request.res.setHeader('Set-Cookie', cookie);
    user.password = undefined;
    return user;
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('log-out')
  async logOut(@Res() response: ResponseWidthUser) {
    response.setHeader(
      'Set-cookie',
      this.authenticationService.getCookieForLogOut(),
    );
    return response.sendStatus(200);
  }

  @UseGuards(JwtAuthenticationGuard)
  @Get()
  authenticate(@Req() request: RequestWidthUser) {
    const user = request.user;
    user.password = undefined;
    return user;
  }
}
