import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice:AuthService) { }
  invalidEmail:boolean=false
  invalidAge:boolean=false
  users:any
  token:any
  signup(credentials:any){
    this.authservice.signup(credentials).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.users=res
        this.token=this.users.token
        localStorage.setItem('token',this.token)
        
        
      },error:(httpError:any)=>{
        console.log(httpError)
        if(httpError.errors.code===11000){
          this.invalidEmail=true
          this.invalidAge=true
        }
      }
    })
  }
  changeEmail(){
    this.invalidEmail=false
  }
changeAge(){
  this.invalidAge=false
}
  ngOnInit(): void {
  }

}
