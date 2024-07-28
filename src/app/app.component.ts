import { Component } from '@angular/core';
// import { LoginFormComponent } from './Mycomponents/login-form/login-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'validate-form';
  constructor() {
    setTimeout(() => {
      this.title = 'validate-form';
    }, 2000)

  }
}
