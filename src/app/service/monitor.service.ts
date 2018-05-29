import { Injectable } from '@angular/core';
import {Monitor} from "../bean/monitor";
import {MONITORS} from "../mock/mock-monitors";

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  constructor() { }

  getMonitors(): Monitor[] {
    return MONITORS;
  }

}
