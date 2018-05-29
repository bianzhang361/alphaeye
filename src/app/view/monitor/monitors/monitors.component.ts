import { Component, OnInit } from '@angular/core';

import {Monitor} from "../../../bean/monitor";
import {MonitorService} from "../../../service/monitor.service";

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.css']
})
export class MonitorsComponent implements OnInit {

  monitors: Monitor[];

  constructor(private monitorService: MonitorService) { }

  ngOnInit() {
    this.getMonitors();
  }

  getMonitors(): void {
    this.monitors = this.monitorService.getMonitors();
  }

}
