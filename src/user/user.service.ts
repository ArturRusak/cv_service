import { Injectable } from '@nestjs/common';
import { UserData } from '../common/types';

@Injectable()
export class UserService {
  constructor() {}
  getUser() {
    return 'Test Data';
  }

  createCV(data: UserData) {
    console.log(data);
    return data;
  }
}
