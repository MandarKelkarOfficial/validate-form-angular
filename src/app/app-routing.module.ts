import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './Mycomponents/about/about.component';
import { LoginFormComponent } from './Mycomponents/login-form/login-form.component';
import { RegisterFormComponent } from './Mycomponents/register-form/register-form.component';

// const routes: Routes = [];

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterFormComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
