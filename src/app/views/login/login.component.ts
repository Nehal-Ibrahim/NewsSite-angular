import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private authservice:AuthService,private router:Router) { }
  invalidlogin: boolean=false
  users:any
  token:any
  login(credentials:any){
    this.authservice.login(credentials).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.users=res
        this.token=this.users.token
        localStorage.setItem('token',this.token)
        this.router.navigate(['/profile'])
      }
      ,error:(httpError:any)=>{
        console.log(httpError)
        this.invalidlogin=true
      }
    })
  }

  ngOnInit(): void {
  }

}
