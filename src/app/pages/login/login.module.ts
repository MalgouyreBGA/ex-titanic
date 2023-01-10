import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page/login-page.component';
import { FormNewUserComponent } from './form-new-user/form-new-user.component';
import { FormLoginUserComponent } from './form-login-user/form-login-user.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    FormNewUserComponent,
    FormLoginUserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    LoginPageComponent,
    FormNewUserComponent,
    FormLoginUserComponent,
  ]
})
export class LoginModule { }
