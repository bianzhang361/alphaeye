import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Monitor } from '../bean/monitor';
import { Result } from '../bean/result';
import { MONITORS } from '../mock/mock-monitors';
import * as Constants from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  // private monitorsUrl = 'http://192.168.100.114:8080/MonitorData';
  private monitorsUrl = Constants.BLACKMAN_URL + '/MonitorData';

  constructor(private http: HttpClient) { }

  /*getMonitors(): Observable<Result> {
    // return of(MONITORS);
    return this.http.get<Result>(this.monitorsUrl);
  }*/
  getMonitors(): Observable<Monitor[]> {
    return of(MONITORS);
  }

  getMonitor(id: number): Observable<Monitor> {
    return of(MONITORS.find(monitor => monitor.id === id));
  }

}
