import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-new-user',
  templateUrl: './form-new-user.component.html',
  styleUrls: ['./form-new-user.component.scss']
})
export class FormNewUserComponent implements OnInit {

  notSamePassword:boolean = false

  onSubmit(newUser: NgForm) {
    console.log(newUser.value);  // { username: '', password1: '' }
    console.log(newUser.valid);  // false

    if ( newUser.value.password1 === newUser.value.password2 ){
      this.notSamePassword = false
      console.log("===")
    } else {
      this.notSamePassword = true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
