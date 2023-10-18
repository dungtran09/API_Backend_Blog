import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { APP_FILTER } from '@nestjs/core';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/category.module';
import { DatabaseModule } from './database';
import AuthenticationModule from './authentication/authentication.module';
import { ExceptionsLongerFilter } from './utils/exceptions';

@Module({
  imports: [
    PostsModule,
    UsersModule,
    CategoriesModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [{ provide: APP_FILTER, useClass: ExceptionsLongerFilter }],
})
export class AppModule {}
