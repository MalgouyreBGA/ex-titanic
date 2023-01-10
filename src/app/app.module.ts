import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { FormsModule }   from '@angular/forms';

import { LoginModule } from './pages/login/login.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule,

    // components modules
    LoginModule,
    HomeModule,
  ],
  providers: [
    //FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
