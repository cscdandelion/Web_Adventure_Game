import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class DataService {
  curUser: User = {
    UserId: -1,
    UserName: '',
    PassWord: '',
    Progress: '',
    Points: 0,
    Type: ''
  };
}
