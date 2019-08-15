import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CrystalLayoutModule} from 'crystal-layout';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CrystalLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
