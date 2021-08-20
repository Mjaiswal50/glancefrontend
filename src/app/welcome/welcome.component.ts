import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthUtils } from '../utility/auth-utils';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {
  private setverifiedurl = "http://localhost:5000/api/user/verify"
  otpForm: FormGroup;
  constructor(private httpClient: HttpClient ,private router: Router) {
    console.log("i am in Welcome")
    this.otpForm = new FormGroup({
      OtpVerify: new FormControl(null, [Validators.required]),
    });
  }


  otpSubmit() {
    alert("hello");
    return this.httpClient.patch(this.setverifiedurl, this.otpForm.value, { headers: AuthUtils.getAuthHeaders()}).subscribe((data)=>{
      location.reload();
    });
  }

}
