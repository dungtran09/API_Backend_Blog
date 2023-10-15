import { NotFoundException } from '@nestjs/common';

class PostNotFoundException extends NotFoundException {
  constructor(postId: number) {
    super(`Post width id ${postId} not found`);
  }
}

export default PostNotFoundException;
