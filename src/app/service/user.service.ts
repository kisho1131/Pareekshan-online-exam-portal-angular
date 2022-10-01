import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../models/user';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = 'http://localhost:8080/api/v1.0/user';
  constructor(private httpClient : HttpClient) { }

  addUser(user : User) : Observable<Object>{
    return this.httpClient.post(`${this.BASE_URL}/add`, user);
  }
}
// return this.httpClient.post(`${this.base_url}/add/product`, product);
