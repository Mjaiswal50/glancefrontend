import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnonGuard } from './guards/anon.guard';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { VerificationincompletedGuard } from './guards/verificationincompleted.guard'
import { VerificationcompletedGuard } from './guards/verificationcompleted.guard';
import {ForgetpasswordComponent} from './forgetpassword/forgetpassword.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [
  {
    path: '',
    canActivate: [AnonGuard],
    children: [{ path: 'signup', component: SignupComponent },
    {path: 'forgetpassword', component: ForgetpasswordComponent},
    { path: '', component: LoginComponent }]
  },
  {
    path: '', canActivate: [AuthGuard, VerificationincompletedGuard], children: [{
      path: 'welcome', component: WelcomeComponent
    }]
  },
  {
    path: '', canActivate: [AuthGuard, VerificationcompletedGuard], children: [{
      path: 'homepage', component: HomepageComponent
    }]
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
