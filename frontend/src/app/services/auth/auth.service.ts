import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 

  }

  // TODO: para login sa user
  login(username: string, password: string) {

  }

  // TODO: user info must be retrieved from secure storage
  getUser() {
    return {
      username: "taguloy.5",
      role: "student"
    }
  }
}
