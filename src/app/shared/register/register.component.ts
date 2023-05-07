import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public form: FormGroup;

  constructor(public auth: AuthService, public router: Router) {
    this.form = new FormGroup({
      user_name: new FormControl('', Validators.required),
      user_email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      user_contact_no: new FormControl('', Validators.required),
      user_pwd: new FormControl('', Validators.required),
      user_gender: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.auth.post(this.form.value).subscribe((response) => {
      Swal.fire('Registration Successfully!');
      console.log('Registration Successfully!');
      this.router.navigate(['/login']);
    });
  }
  changeuser_gender(e: any) {}
}
