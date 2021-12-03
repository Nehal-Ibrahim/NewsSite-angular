import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='http://localhost:4000/'

constructor(private http:HttpClient) { }
signup(credentials:any){
  return this.http.post(this.url +'reporters/register',credentials)
}
login(credentials:any){
  return this.http.post(this.url +'reporters/login',credentials)
}
getToken(){
  return localStorage.getItem('token')
}
logout(){
  return this.http.delete(this.url+'logout')
}

}
