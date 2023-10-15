import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export default class RegisterDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(7)
  password: string;
}
