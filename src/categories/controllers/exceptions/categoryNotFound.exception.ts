import { NotFoundException } from '@nestjs/common';

class CategoryNotFoundException extends NotFoundException {
  constructor(postId: number) {
    super(`Category width id ${postId} not found`);
  }
}

export default CategoryNotFoundException;
