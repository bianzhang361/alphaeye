import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MonitorService } from '../../../service/monitor.service';
import { Monitor } from '../../../bean/monitor';
import { FormState } from '../../../bean/form-state';

@Component({
  selector: 'app-monitor-detail',
  templateUrl: './monitor-detail.component.html',
  styleUrls: ['./monitor-detail.component.css']
})
export class MonitorDetailComponent extends FormState implements OnInit {

  monitor: Monitor;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private monitorService: MonitorService
  ) { super(); }

  ngOnInit() {
    this.getMonitor();
    this.isReadonly = true;
    this.editBtn = false;
    this.saveBtn = true;
  }

  getMonitor(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.monitorService.getMonitor(id)
      .subscribe(monitor => { this.monitor = monitor; });
  }

  goBack(): void {
    this.location.back();
  }

}
