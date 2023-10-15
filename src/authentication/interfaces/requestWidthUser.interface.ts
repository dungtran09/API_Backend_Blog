import { Request } from 'express';
import User from 'src/users/entities/user.entity';

interface RequestWidthUser extends Request {
  user: User;
}

export default RequestWidthUser;
