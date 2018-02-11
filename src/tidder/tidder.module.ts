import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { TidderComponent } from './tidder.component';
import { TidderRoutingModule } from "./tidder-routing.module";


@NgModule({
  declarations: [
    TidderComponent,
    TidderRoutingModule.routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [TidderComponent]
})
export class TidderModule { }
