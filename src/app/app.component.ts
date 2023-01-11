import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CsvService } from './services/outside-app/csv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ex-titanic';

  switchRoute:boolean = false
  testroutes(){
    this.switchRoute ? this.switchRoute = false : this.switchRoute = true
    this.switchRoute ? this.router.navigate(['home']) : this.router.navigate([''])
  }

  constructor(
    private router:Router,
    private csv:CsvService,
  ){}
}
