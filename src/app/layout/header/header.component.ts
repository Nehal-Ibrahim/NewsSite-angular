import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authservice:AuthService) { }
  logout(){
    this.authservice.logout().subscribe(()=>{})
    localStorage.removeItem('token')
  }
  get isloogedIn(){
    let token=this.authservice.getToken()
    if(token){
      return false
    }
    return true

  }

  ngOnInit(): void {
  }

}
