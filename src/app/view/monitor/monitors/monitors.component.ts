import { Component, OnInit } from '@angular/core';

import { MONITORS } from '../../../mock/mock-monitors';

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.css']
})
export class MonitorsComponent implements OnInit {

  monitors = MONITORS;

  constructor() { }

  ngOnInit() {
  }

}
