import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  private signupurl = "http://localhost:5000/api/user/signup"
  signupForm: FormGroup;
  constructor(private httpClient: HttpClient,private router:Router) {
    this.signupForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, [Validators.required]),
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  signup(){
     this.httpClient.post(this.signupurl, this.signupForm.value).subscribe(()=>{
       console.log("sucessful");
       this.router.navigate(['']);
     });
    }
}
