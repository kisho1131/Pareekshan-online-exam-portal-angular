import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  private BASE_URL = 'http://localhost:8080';

  // Get the current logged-in user
  public getCurrentUser() {
    return this.httpClient.get(`${this.BASE_URL}/current-user`);
  }

  // Generate Token from the Server
  public generateToken(loginRequest: any) {
    return this.httpClient.post(`${this.BASE_URL}/generateToken`, loginRequest);
  }

  // login user : set token in the local storage
  public setToken(token: string) {
    localStorage.setItem('token', token);
    return true;
  }

  // isLogin : Checks Weather the user is logged in or not
  public isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == undefined || token == '' || token == null) return false;
    return true;
  }

  //Logout : Remove the token from the Local storage
  public logout() {
    localStorage.removeItem('token');
    window.localStorage.clear();
    return true;
  }

  // getToken : Get the Token from the local storage
  public getToken() {
    return localStorage.getItem('token');
  }

  // setUserDetails : Set the user details to the local Storage

  public setUserDetails(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserDetails() {
    let user = localStorage.getItem('user');
    if (user != null) return JSON.parse(user);
    return null;
  }

  //getUserRole : get the user Role
  public getUserRole() {
    let user = this.getUserDetails();
    return user.authorities[0].authority;
  }
}
