import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MonitorsComponent } from './view/monitor/monitors/monitors.component';
import { MonitorService } from './service/monitor.service';
import { BaseviewComponent } from './view/baseview/baseview.component';
import { MonitorDetailComponent } from './view/monitor/monitor-detail/monitor-detail.component';
import { ClassificationComponent } from './view/other/music/classification/classification.component';
import { MusicListComponent } from './view/other/music/music-list/music-list.component';
import { MusicService } from './service/music.service';

@NgModule({
  declarations: [
    AppComponent,
    MonitorsComponent,
    BaseviewComponent,
    MonitorDetailComponent,
    ClassificationComponent,
    MusicListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    MonitorService,
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
