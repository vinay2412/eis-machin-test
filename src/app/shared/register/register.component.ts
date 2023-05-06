import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  message: boolean = false;
  public form: FormGroup;

  constructor(public auth: AuthService, public router: Router) {
    this.form = new FormGroup({
      user_name: new FormControl('', Validators.required),
      user_email: new FormControl('', Validators.required),
      user_phone_no: new FormControl('', Validators.required),
      user_pwd: new FormControl('', Validators.required),
      user_gender: new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log(this.form.value);
    this.auth.post(this.form.value).subscribe((response) => {
      this.message = true;
      this.router.navigate(['/login']);
      this.form.reset({});
      console.log('Register Successfully!');
    });
  }
  changeuser_gender(e: any) {}
}

// registerForm: FormGroup;

// constructor(private formBuilder: FormBuilder, private http: HttpClient) {
//   this.registerForm = this.formBuilder.group({
//     user_name: ['', Validators.required],
//     user_email: ['', Validators.required],
//     user_phone_no: ['', Validators.required],
//     user_password: ['', Validators.required],
//     user_gender: ['', Validators.required],
//   });
// }

// onSubmit() {
//   if (this.registerForm.valid) {
//     const registrationData = {
//       user_name: this.registerForm.value.user_name,
//       user_phone_no: this.registerForm.value.user_phone_no,
//       user_email: this.registerForm.value.user_email,
//       user_password: this.registerForm.value.user_password,
//       user_gender: this.registerForm.value.user_gender,
//     };
//     this.http
//       .post('https://devrunner.co.in/machine_test/index.php/web_api/Users/Register', registrationData)
//       .subscribe(
//         (response) => {
//           console.log(response);
//           // handle successful registration response here
//         },
//         (error) => {
//           console.log(error);
//           // handle error response here
//         }
//       );
//   }
// }
// changeuser_gender(e: any) {}
// }
