import { Response } from 'express';
import User from 'src/users/user.entity';

interface ResponseWidthUser extends Response {
  user: User;
}

export default ResponseWidthUser;
