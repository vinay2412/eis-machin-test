import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{AuthService} from "../auth.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  message: boolean = false;
  public form: FormGroup;

    constructor(public auth: AuthService,
       public router:Router) {

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
    })
  }
  changeuser_gender(e:any) { }
}
