import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './LogIn/view/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './SignUp/view/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestsigninComponent } from './Practice/view/testsignin/testsignin.component';
import { HomeComponent } from './Home/view/home/home.component';
import { OtpgeneratorComponent } from './OTPGenerator/view/otpgenerator/otpgenerator.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TestsigninComponent,
    HomeComponent,
    OtpgeneratorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
