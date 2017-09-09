import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// RootComponent import
import { RootComponent } from './app.component';

@NgModule({
  declarations: [
    RootComponent // RootComponent Declared as component of AppModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent] // configured to bootstrap from RootComponent
})
export class AppModule { }
