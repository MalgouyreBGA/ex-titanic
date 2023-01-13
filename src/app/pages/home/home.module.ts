import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GraphAgeComponent } from './graph-age/graph-age.component';
import { GraphSexeComponent } from './graph-sexe/graph-sexe.component';
import { GraphClasseComponent } from './graph-classe/graph-classe.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    GraphAgeComponent,
    GraphSexeComponent,
    GraphClasseComponent,
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
