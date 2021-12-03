import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  user:User={}
  url="http://localhost:4000/"
  
  getprofile(){
    return this.http.get<User>(this.url+'profile')
  }
  updateprofile(user:User){
    return this.http.patch(this.url+'profile',user)
  }
  
}
