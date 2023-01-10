import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/in-app/navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

disconect(){
  this.navigation.returnLogin()
}

  constructor(
    private navigation:NavigationService
  ) { }

  ngOnInit(): void {
  }

}
