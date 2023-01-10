import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavigationService } from 'src/app/services/in-app/navigation.service';

@Component({
  selector: 'app-form-login-user',
  templateUrl: './form-login-user.component.html',
  styleUrls: ['./form-login-user.component.scss']
})
export class FormLoginUserComponent implements OnInit {

  onSubmit(login: NgForm) {
    console.log(login.value);
    console.log(login.valid);

    this.navigation.successLogin()
  }

  constructor(
    private navigation:NavigationService
  ) { }

  ngOnInit(): void {
  }

}
