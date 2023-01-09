import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    NavbarComponent,
  ]
})
export class HomeModule { }
