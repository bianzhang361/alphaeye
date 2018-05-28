import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MonitorsComponent} from './view/monitor/monitors/monitors.component';

const routes: Routes = [
  { path: '', redirectTo: '/alphaeye', pathMatch: 'full' },
  { path: 'monitors', component: MonitorsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
