import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MonitorsComponent } from './view/monitor/monitors/monitors.component';
import {MonitorService} from "./service/monitor.service";

@NgModule({
  declarations: [
    AppComponent,
    MonitorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MonitorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
