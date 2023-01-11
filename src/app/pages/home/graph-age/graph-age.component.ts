import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CsvService } from 'src/app/services/outside-app/csv.service';

@Component({
  selector: 'app-graph-age',
  templateUrl: './graph-age.component.html',
  styleUrls: ['./graph-age.component.scss']
})
export class GraphAgeComponent implements OnInit, OnDestroy {

  graphData:{[key:string]:number}={} as {[key:string]:number}
  graphKeys = [
    "0 à 10",
    "11 à 20",
    "21 à 30",
    "31 à 40",
    "41 à 50",
    "51 à 60",
    "61 à 70",
    "71 à 80",
    "81 à 90",
    "91 à 100",
    "101 à 110",
    "111 à 120"
  ]
  download:Subscription[] = []

  graphDataImport(data:any[]):{[key:string]:number}{
    let tempData:{[key:string]:number} = {
      [this.graphKeys[0]]: data.filter((e:any)=> e.Age > 0 && e.Age <= 10).length,
      [this.graphKeys[1]]: data.filter((e:any)=> e.Age > 11 && e.Age <= 20).length,
      [this.graphKeys[2]]: data.filter((e:any)=> e.Age > 21 && e.Age <= 30).length,
      [this.graphKeys[3]]: data.filter((e:any)=> e.Age > 31 && e.Age <= 40).length,
      [this.graphKeys[4]]: data.filter((e:any)=> e.Age > 41 && e.Age <= 50).length,
      [this.graphKeys[5]]: data.filter((e:any)=> e.Age > 51 && e.Age <= 60).length,
      [this.graphKeys[6]]: data.filter((e:any)=> e.Age > 61 && e.Age <= 70).length,
      [this.graphKeys[7]]: data.filter((e:any)=> e.Age > 71 && e.Age <= 80).length,
      [this.graphKeys[8]]: data.filter((e:any)=> e.Age > 81 && e.Age <= 90).length,
      [this.graphKeys[9]]: data.filter((e:any)=> e.Age > 91 && e.Age <= 100).length,
      [this.graphKeys[10]]: data.filter((e:any)=> e.Age > 101 && e.Age <= 110).length,
      [this.graphKeys[11]]: data.filter((e:any)=> e.Age > 111 && e.Age <= 120).length,
    }
    console.log(tempData)
    return tempData
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
