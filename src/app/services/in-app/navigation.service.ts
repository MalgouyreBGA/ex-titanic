import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  returnLogin(){
    this.router.navigate([''])
  }
  successLogin(){
    this.router.navigate(['home'])
  }

  constructor(
    private router:Router,
  ) { }
}
