import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { ProfileComponent } from './views/profile/profile.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AddNewsComponent } from './views/add-news/add-news.component';
import { NewsComponent } from './views/news/news.component';
import { NewsService } from './services/news.service';
import { EditProfileComponent } from './views/edit-profile/edit-profile.component';
import { EditNewsComponent } from './views/edit-news/edit-news.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    AddNewsComponent,
    NewsComponent,
    EditProfileComponent,
    EditNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,{
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    },
    NewsService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
