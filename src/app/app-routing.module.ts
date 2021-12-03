import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { EditNewsComponent } from './views/edit-news/edit-news.component';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { LoginComponent } from './views/login/login.component';
import { NewsComponent } from './views/news/news.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignupComponent } from './views/signup/signup.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'addnews',component:AddNewsComponent,canActivate:[AuthGuardService]},
  {path:'news',component:NewsComponent,canActivate:[AuthGuardService]},
  {path:'editprofile',component:EditProfileComponent,canActivate:[AuthGuardService]},
  {path:'editnews/:id',component:EditNewsComponent,canActivate:[AuthGuardService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
