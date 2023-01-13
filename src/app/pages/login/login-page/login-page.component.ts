import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  formSwitch:boolean = true
  changeForm(){
    this.formSwitch ? this.formSwitch = false : this.formSwitch = true
  }

  constructor(
  ) { }

  ngOnInit(): void {
    
  }

}
