import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['', [Validators.required]]
    }, { validators: this.matchingPasswords }); // Add custom validator
  }

  matchingPasswords(group: FormGroup): { notSame: boolean } | null {
    const password = group.get('password')?.value;
    const cpassword = group.get('cpassword')?.value;

    return password === cpassword ? null : { notSame: true };
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    // Handle successful registration logic here
    console.log(this.registerForm.value); // Access form values
    alert("Registration successful!");
  }
}
