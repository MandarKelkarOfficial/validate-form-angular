import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {


  // email: string = ' ';
  // password: string = ' ';

  constructor(private formBuilder: FormBuilder) {
    // this.loginForm = this.formBuilder.group({ username: ['', Validators.required] })
    // this.email;
    // this.password;
  }

  // onSubmit() {
  //   this.submitted = true;
  //   if (this.registerForm.invalid) {
  //     return
  //   }
  //   alert("Success")

  // }

}
