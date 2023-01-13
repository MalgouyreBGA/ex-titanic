import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { NavigationService } from 'src/app/services/in-app/navigation.service';
import { DatabaseManagerService } from 'src/app/services/outside-app/database-manager.service';

@Component({
  selector: 'app-form-login-user',
  templateUrl: './form-login-user.component.html',
  styleUrls: ['./form-login-user.component.scss']
})
export class FormLoginUserComponent implements OnInit, OnDestroy {

  error:boolean = false
  download:Subscription[] = []

  onSubmit(login: NgForm) {
    let form = login.value
    this.data.postUser(form.username, form.password)
  }

  constructor(
    private nav:NavigationService,
    private data:DatabaseManagerService,
  ) { }

  ngOnDestroy(): void {
    this.download.forEach(sub=>sub.unsubscribe())
  }

  ngOnInit(): void {
    this.download=[
      this.data.error.subscribe((data:boolean) => this.error = data)
    ]
  }

}
