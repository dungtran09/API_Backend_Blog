import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import PostsService from '../services/posts.service';
import CreatePostDto from '../dto/createPost.dto';
import UpdatePostDto from '../dto/updatePost.dto';
import FindOneParams from '../../utils/valications/findOneParams.vali';
import JwtAuthenticationGuard from '../../authentication/guards/jwt-authentication.guard';
import RequestWidthUser from '../../authentication/interfaces/requestWidthUser.interface';

@Controller('posts')
export default class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPost() {
    return this.postsService.getAllPost();
  }

  @Get(':id')
  async getPostById(@Param() { id }: FindOneParams) {
    return this.postsService.getPostById(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createPost(@Body() post: CreatePostDto, @Req() req: RequestWidthUser) {
    return this.postsService.createPost(post, req.user);
  }

  @Patch(':id')
  async updatePost(
    @Param() { id }: FindOneParams,
    @Body() post: UpdatePostDto,
  ) {
    return this.postsService.updatePost(Number(id), post);
  }

  @Delete(':id')
  async deletePost(@Param() { id }: FindOneParams) {
    return this.postsService.deletePost(Number(id));
  }
}
