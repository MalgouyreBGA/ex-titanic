import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChartModule } from 'primeng/chart';
import { Chart } from 'chart.js';

import { CsvService } from 'src/app/services/outside-app/csv.service';
import { NavigationService } from 'src/app/services/in-app/navigation.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  currentType:''|'Age'|'Sexe'|'Classe' = ""

  graphData:{[key:string]:number}={} as {[key:string]:number}
  graphKeys:string[] = []
  download:Subscription[] = []

  keysLists = {'Age': [
    {min: 0, max: 10},
    {min: 11, max: 20},
    {min: 21, max: 30},
    {min: 31, max: 40},
    {min: 41, max: 50},
    {min: 51, max: 60},
    {min: 61, max: 70},
    {min: 71, max: 80},
    {min: 81, max: 90},
    {min: 91, max: 110},
    {min: 111, max: 120}
  ],
  'Sexe':["homme","femme"],
  'Classe': []
  }


  // ##########################################################

  public chart: any

  ageGraphDataImport(data:any[]){
    let tempData:{[key:string]:number} = {}
    this.keysLists.Age.forEach((age:any)=>{
      const str = `${age.min} à ${age.max}`
      Object.assign(tempData, { [str]: data.filter((e:any)=> e.Age > age.min && e.Age <= age.max).length })
    })
    
    this.graphKeys = Object.keys(tempData)

    return this.chartInit(this.dataFormat(tempData), Object.keys(tempData))
  }

  classGraphDataImport(data:any[]){
    let tempData:{[key:string]:number} = {}

    data.forEach(e => {
      tempData[`${e.Pclass}`] ? tempData[`${e.Pclass}`] += 1 : Object.assign(tempData, { [`${e.Pclass}`]: 1 })
    })

    this.graphKeys = Object.keys(tempData)

    return this.chartInit(this.dataFormat(tempData), Object.keys(tempData))
  }

  sexGraphDataImport(data:any[]){
    let tempData:{male:number, female:number} = {
      male: data.filter((e:any)=>e.Sex === "male").length,
      female: data.filter((e:any)=>e.Sex === "female").length
    }
  
    this.graphKeys = Object.keys(tempData)

    return this.chartInit(this.dataFormat(tempData), this.keysLists.Sexe)
  }

// ##########################################

  dataFormat(data:{[key:string]:number}){
    let array:number[] = []
    let datakeys:string[] = Object.keys(data)
    datakeys.forEach(e=>array.push(data[e]))
    return array
  }

  chartInit(data:number[], keys:string[]){
    return new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: keys, 
        datasets: [{
          label: "",
          data: data,
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
  }
// select #########################################################

select(data:any, type: '' | 'Age' | 'Sexe' | 'Classe' ){
  if (type ==='Age'){
    return this.ageGraphDataImport(data)
  }else if (type ==='Sexe'){
    return this.sexGraphDataImport(data)
  }else if (type ==='Classe'){
    return this.classGraphDataImport(data)
  } else {
    return {}
  }
}

reset(){
  this.nav.graphchange("")
}

// ################################################################

  constructor(
    private csv:CsvService,
    private ChartMod:ChartModule,
    private nav:NavigationService,
  ) { }

  ngOnInit(): void {
    this.download = [
      this.nav.graphType.subscribe((data:''|'Age'|'Sexe'|'Classe') => this.currentType=data),
      this.csv.csvContent.subscribe((data:any[])=> this.chart = this.select(data, this.nav.graphType.value))
    ]
  }
  ngOnDestroy(): void {
    this.download.forEach(sub=>sub.unsubscribe())
  }
}
