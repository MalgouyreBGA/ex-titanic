import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  querryTypes = ['age', 'sexe', 'classe des billets']

  onSubmit(whichGraph: NgForm) {
    console.log(whichGraph.value); 
    console.log(whichGraph.valid);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
