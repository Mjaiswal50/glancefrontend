import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthUtils } from '../utility/auth-utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  private loginurl = "http://localhost:5000/api/user/login"
  loginForm: FormGroup;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('jaiswalmayank450@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('qwertyuiop', [Validators.required, Validators.minLength(8)])
    });
  }

  login() {
    const data = {params: this.loginForm.value};
    console.log(this.loginForm.value);
    this.httpClient.get(this.loginurl, data).pipe(map((res:any) => {
        AuthUtils.setAuthToken(res.token);
        return res.user;
      })).subscribe((user) => {
        console.log(user);
        this.router.navigate(['homepage']);
    });
  }

}
