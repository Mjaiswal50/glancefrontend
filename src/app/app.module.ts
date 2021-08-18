import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnonGuard } from './guards/anon.guard';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { VerificationincompletedGuard } from './guards/verificationincompleted.guard';
import { VerificationcompletedGuard } from './guards/verificationcompleted.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent,
    HomepageComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard,AnonGuard,VerificationcompletedGuard,VerificationincompletedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
