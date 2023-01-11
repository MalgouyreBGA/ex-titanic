import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  csvContent = new BehaviorSubject({} as any)

  csvDownload(){
    this.http.get("https://raw.githubusercontent.com/hkacmaz/Titanic-Passenger-Survivors/master/train.csv", {responseType: 'text'})
      .subscribe(
        (data:any) => {
          let convertedData = this.fileConvert(data)
          this.csvContent.next(convertedData)
        },
        (error:any) => console.log(error),
        () => {
          console.log(this.csvContent)
          this.router.navigate(['home'])
        }
      );
  }

// <###################################################################

  dataFormat(array:string[]){
    //[ "886", "0", "3", "\"Rice", " Mrs. William (Margaret Norton)\"", "female", "39", "0", "5", "382652", … ]
    let arrayTemp:any[] = []

    let before = /"\S+/g
    let after = /.+"/g
    let useless = /"/g

    array.forEach((str)=>{
      if (!str.match(after) && !str.match(before)){
        !isNaN(Number(str)) ? arrayTemp.push(Number(str)) : arrayTemp.push(str)
      } else if (str.match(before)) {
        arrayTemp.push(str.replace(useless, ""))
      } else if (str.match(after)) {
        arrayTemp[arrayTemp.length-1] = (arrayTemp[arrayTemp.length-1] + "," + str.replace(useless, ""))
      }
    })
    return arrayTemp
  }

  fileConvert(csv: any) {
  let tempcsv:any[] = csv.split('\r\n').filter((s:string) => s != "")
  let header = tempcsv.shift().split(',')

  let jsonStyle:any[] = []
    tempcsv.forEach((line:any) => {
      let tempLine:any = this.dataFormat(line.split(','))
      let obj = {}
      for (let key in header){
        Object.assign(obj, { [`${header[key]}`]: tempLine[key] })
      }
      jsonStyle.push(obj)
    })
    return jsonStyle
  }

// ###################################################################

  constructor(
    private http:HttpClient,
    private ngxCsvParser: NgxCsvParser,
    private router:Router,
  ) {
  }
}
