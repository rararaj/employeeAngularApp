import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../domain/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor() {

  }

  public findAll() {
    //TODO: Add the call to the backend endpoint for retrieving the list of users
  }

  public save(user: User) {
    //TODO: Add the call to the backend endpoint for adding new user
  }
}
