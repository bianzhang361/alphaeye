import { Component, OnInit } from '@angular/core';

import { Monitor } from "../../../bean/monitor";
import { Result } from "../../../bean/result";
import { MonitorService } from "../../../service/monitor.service";

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.css']
})
export class MonitorsComponent implements OnInit {

  monitors: Object;

  constructor(private monitorService: MonitorService) { }

  ngOnInit() {
    this.getMonitors();
  }

  getMonitors(): void {
    //this.monitors = this.monitorService.getMonitors();
    this.monitorService.getMonitors()
      .subscribe(result => {
        console.log(result.data);
        this.monitors = result.data});
  }

}
