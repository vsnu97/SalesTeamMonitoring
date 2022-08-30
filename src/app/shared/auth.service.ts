import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }

  public loginVerify(user: User)
  {
    //calling the api for checking username and password
    return this.httpClient.get<User>(environment.apiUrl + 'api/Users/' + user.UserName + '/' + user.UserPassword);
  }

  //log out
  public logOut(){
    sessionStorage.removeItem('Username');
    sessionStorage.removeItem('Access_Role');
  }
}
