import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    GraphComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomePageComponent,
    NavbarComponent,
  ],
  providers: []
})
export class HomeModule { }
