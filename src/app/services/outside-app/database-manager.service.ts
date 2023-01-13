import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NavigationService } from 'src/app/services/in-app/navigation.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseManagerService {

  error = new BehaviorSubject<boolean>(false)

  postUser(usernameLog:string, passwordLog:string){
    this.http.get('assets/users.json').subscribe(
      (data:any) => {
        const temp = data.users
        let condition = temp.find((e:any) => e.username.toString()===usernameLog && e.password.toString()===passwordLog)
        if (condition) {
          this.error.next(false)
          this.nav.successLogin()
        } else {
          this.error.next(true)
        }
      },
      (error:any) => {
        console.log(error)
      },
      () => {
      }
    );
  }
  constructor(
    private http:HttpClient,
    private nav:NavigationService,
    ) { }
}
