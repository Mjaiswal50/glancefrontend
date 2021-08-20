import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthUtils } from '../utility/auth-utils';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  isCodeSent = false;
  private fpreseturl = "http://localhost:5000/api/user/fpreset";
  private fpseturl = "http://localhost:5000/api/user/fpset";

  fpresetForm: FormGroup;
  fpsetForm: FormGroup;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.fpresetForm = new FormGroup({
      email: new FormControl('jaiswalmayank450@gmail.com', [Validators.required, Validators.email])
    })

    this.fpsetForm = new FormGroup({
      otpcheck: new FormControl('null', [Validators.required]),
      newpassword: new FormControl('null', [Validators.required, Validators.minLength(8)]),
      emailtobereset: new FormControl('null', [Validators.required, Validators.email])
    })
  }
  fpreset() {
    this.httpClient.patch(this.fpreseturl, this.fpresetForm.value).subscribe((user) => {
      if (!!user) { this.isCodeSent = true; }
      console.log(user);
    });
  }

  fpset() {
    this.httpClient.patch(this.fpseturl, this.fpsetForm.value).subscribe((user) => {
      if (!!user) {
        this.router.navigate(['']);
      }
      console.log(user);
    });
  }






}
