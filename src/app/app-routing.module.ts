import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorsComponent } from './view/monitor/monitors/monitors.component';
import { MonitorDetailComponent } from './view/monitor/monitor-detail/monitor-detail.component';
import { ClassificationComponent } from './view/other/music/classification/classification.component';
import { MusicListComponent } from './view/other/music/music-list/music-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/alphaeye', pathMatch: 'full' },
  { path: 'monitors', component: MonitorsComponent },
  { path: 'monitor-detail/:id', component: MonitorDetailComponent },
  { path: 'classification', component: ClassificationComponent },
  { path: 'music-list', component: MusicListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
