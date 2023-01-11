import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CsvService } from 'src/app/services/outside-app/csv.service';

@Component({
  selector: 'app-graph-sexe',
  templateUrl: './graph-sexe.component.html',
  styleUrls: ['./graph-sexe.component.scss']
})
export class GraphSexeComponent implements OnInit, OnDestroy {

  graphData:{male:number, female:number}={} as {male:number, female:number}
  download:Subscription[] = []

  graphDataImport(data:any[]):{male:number, female:number}{
    let tempData:{male:number, female:number} = {
      male: data.filter((e:any)=>e.Sex === "male").length,
      female: data.filter((e:any)=>e.Sex === "female").length
    }

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
