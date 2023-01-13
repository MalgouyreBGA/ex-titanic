import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { FormsModule }   from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NgxChartsModule } from '@swimlane/ngx-charts';

import { LoginModule } from './pages/login/login.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //FormsModule,

    BrowserAnimationsModule,
    //NgxChartsModule,

    // components modules
    LoginModule,
    HomeModule,
  ],
  providers: [
    //FormsModule
    //NgxChartsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
