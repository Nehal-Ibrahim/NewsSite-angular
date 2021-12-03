import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private userservice:UserService , private router:Router ) { }
  user:User={}
  
  getuser(){
    this.userservice.getprofile().subscribe({
      next:(res:any)=>{
        console.log(res)
      }
    })
  }
  updateuser(user:User){
    this.userservice.updateprofile(user).subscribe({
      next:()=>{
       
        this.router.navigate(['/profile'])
        
      }
    })
  }
 

  ngOnInit(): void {
    this.getuser()
  }

}
