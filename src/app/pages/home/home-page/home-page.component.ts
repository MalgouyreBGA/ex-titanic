import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  querryTypes = ['Age', 'Sexe', 'Classe']
  // age tranche de 10

  switch:boolean = true
  graphType:'simple'|'mixed'|undefined

  whichGraphComp:any

  onSubmit(whichGraph: NgForm, type:'simple'|'mixed') {
    if (whichGraph.value.selectedQuerry != ""){
      this.whichGraphComp = whichGraph.value
      this.graphType = type
      this.switch = !this.switch
    }
  }
  onReset(){this.switch = !this.switch}

  constructor() { }

  ngOnInit(): void {
  }

}
