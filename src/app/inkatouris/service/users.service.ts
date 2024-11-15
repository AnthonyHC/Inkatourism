import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {User} from "../model/users.entity";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{
  constructor() {
    super();
    this.resourceEndPoint='/users';
  }
}

export class UsersService {
}
