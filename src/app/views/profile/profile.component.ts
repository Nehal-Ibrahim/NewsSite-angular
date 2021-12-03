import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/userModel';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userservice:UserService) { }
  user:User={}
  getData(){
    this.userservice.getprofile().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.user=res
      }
    })
  }

  ngOnInit(): void {
    this.getData()
  }

}
