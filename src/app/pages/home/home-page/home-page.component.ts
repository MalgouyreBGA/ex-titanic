import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/services/in-app/navigation.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  currentType:''|'Age'|'Sexe'|'Classe' = ""
  download:Subscription[] = []

// --------------------------------------

  querryTypes = ['Age', 'Sexe', 'Classe']

  graphType:'simple'|'mixed'|undefined

  async onSubmit(whichGraph: NgForm, type:'simple'|'mixed') {
    console.log(whichGraph.value.selectedQuerry)
    if (whichGraph.value.selectedQuerry != ""){
      this.nav.graphchange(whichGraph.value.selectedQuerry)
      this.graphType = type
    }
  }

  constructor(
    private nav:NavigationService,
  ) { }

  ngOnInit(): void {
    this.download=[
      this.nav.graphType.subscribe((data:''|'Age'|'Sexe'|'Classe') => this.currentType=data),
    ]
  }

}
