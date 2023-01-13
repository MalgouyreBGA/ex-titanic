import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { CsvService } from '../outside-app/csv.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  graphType = new BehaviorSubject<''|'Age'|'Sexe'|'Classe'>("")

  graphchange(type:''|'Age'|'Sexe'|'Classe'){
    this.graphType.next(type)
  }

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
