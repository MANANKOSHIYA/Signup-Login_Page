import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './LogIn/view/login/login.component';
import { SignupComponent } from './SignUp/view/signup/signup.component';
import { AppComponent } from './app.component';
import { TestsigninComponent } from './Practice/view/testsignin/testsignin.component';
import { HomeComponent } from './Home/view/home/home.component';
import { OtpgeneratorComponent } from './OTPGenerator/view/otpgenerator/otpgenerator.component';

const routes: Routes = [
  {
    path:"",
    component:AppComponent,
    children:[
      {
        path:"",
        redirectTo:'/login',
        pathMatch:'full'
      }
    ]
  },
  {
    path: "login",
    component:LoginComponent 
  },
  {
    path: "signup",
    component:SignupComponent
  },
  {
    path: "practice",
    component:TestsigninComponent
  },
  {
    path: "home",
    component:HomeComponent
  },
  {
    path:"otpgenerator",
    component:OtpgeneratorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
