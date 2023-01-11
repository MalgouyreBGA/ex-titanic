import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CsvService } from 'src/app/services/outside-app/csv.service';

@Component({
  selector: 'app-graph-classe',
  templateUrl: './graph-classe.component.html',
  styleUrls: ['./graph-classe.component.scss']
})
export class GraphClasseComponent implements OnInit, OnDestroy {

  graphData:{[key:string]:number}={} as {[key:string]:number}
  graphKeys:string[] = []
  download:Subscription[] = []
/*
Age: 22
Cabin: 0
Embarked: "S"
Fare: 7.25
Name: "Braund, Mr. Owen Harris"
Parch: 0
PassengerId: 1
Pclass: 3
Sex: "male"
SibSp: 1
Survived: 0
Ticket: "A/5 21171"
*/

  graphDataImport(data:any[]):{[key:string]:number}{
    let obj:{[key:string]:number} = {}

    data.forEach(e => {
      obj[`${e.Pclass}`] ? obj[`${e.Pclass}`] += 1 : Object.assign(obj, { [`${e.Pclass}`]: 1 })
    })

    this.graphKeys = Object.keys(obj)
    return obj
  }

  constructor(
    private csv:CsvService,
  ) { }

  ngOnInit(): void {
    this.download = [
      this.csv.csvContent.subscribe((data:any[])=>this.graphData = this.graphDataImport(data))
    ]
  }
  ngOnDestroy(): void {
    this.download.forEach(sub=>sub.unsubscribe())
  }
}
