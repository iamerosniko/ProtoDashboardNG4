import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
//routing
import { AppRouting } from './app.routing';
@NgModule({
  imports:      [ BrowserModule , AppRouting ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
