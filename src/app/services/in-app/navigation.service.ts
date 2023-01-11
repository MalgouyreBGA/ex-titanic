import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CsvService } from '../outside-app/csv.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  returnLogin(){
    this.router.navigate([''])
  }
  successLogin(){
    this.csv.csvDownload()
    //this.router.navigate(['home'])
  }

  constructor(
    private router:Router,
    private csv:CsvService,
  ) { }
}
