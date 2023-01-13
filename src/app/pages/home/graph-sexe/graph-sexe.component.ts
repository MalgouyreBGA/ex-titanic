import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChartModule } from 'primeng/chart';
import { Chart } from 'chart.js';

import { CsvService } from 'src/app/services/outside-app/csv.service';

@Component({
  selector: 'app-graph-sexe',
  templateUrl: './graph-sexe.component.html',
  styleUrls: ['./graph-sexe.component.scss']
})
export class GraphSexeComponent implements OnInit, OnDestroy {

  graphData:{male:number, female:number}={} as {male:number, female:number}
  download:Subscription[] = []

  public chart: any

  graphDataImport(data:any[]):{male:number, female:number}{
    let tempData:{male:number, female:number} = {
      male: data.filter((e:any)=>e.Sex === "male").length,
      female: data.filter((e:any)=>e.Sex === "female").length
    }
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Homme', 'Femme',], 
        datasets: [{
          data: [tempData.male, tempData.female,],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        aspectRatio:2.5
      }
    });

    return tempData
  }

  constructor(
    private csv:CsvService,
    private ChartMod:ChartModule
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
