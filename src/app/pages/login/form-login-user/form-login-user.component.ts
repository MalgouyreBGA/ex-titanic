import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-login-user',
  templateUrl: './form-login-user.component.html',
  styleUrls: ['./form-login-user.component.scss']
})
export class FormLoginUserComponent implements OnInit {

  onSubmit(login: NgForm) {
    console.log(login.value);  // { first: '', last: '' }
    console.log(login.valid);  // false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
