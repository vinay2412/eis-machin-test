import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  message: boolean = false;
  public form: FormGroup;

  constructor(public auth: AuthService, public router: Router) {
    this.form = new FormGroup({
      user_email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      user_pwd: new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log(this.form.value);
    this.auth.login(this.form.value).subscribe((res) => {
      if (res.status == 1) {
        console.log('login successfully!')
        this.router.navigateByUrl('/dashboard');
      } else {
        console.log(res);
        if ((this.message = true)) {
          setTimeout(() => this.remove(), 2000);
        }
      }
    });
  }
  remove() {
    this.message = false;
  }
}
