import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { MusicResponse } from '../bean/music/music-response';

const httpOptions = {
  // headers: new HttpHeaders({ 'Referer': 'http://h.xiami.com/' })
  headers: new HttpHeaders().set('Referer', 'http://h.xiami.com/')
};
const httpParams = {
  params: new HttpParams().set('Referer', 'http://h.xiami.com/')
}

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  static times = 0;   // 用于记录jsonp请求的次数

  private musicUrl = 'http://api.xiami.com/web?v=2.0&' +
    'app_key=1&id=101&page=1&limit=20&_ksTS=' + new Date().valueOf() + '_11&callback=jsonp81&r=rank/song-list';
  private callBackUrl = '';

  public ACTION: any = {   // all action
    ACTLIST: 'schoolsign/teacher/actlist',   // 查看签到列表
    ACTINFO: 'schoolsign/teacher/actinfo',   // 查看签到信息
    STUADD: 'schoolsign/teacher/stuadd',  // 添加学生
    STULIST: 'schoolsign/teacher/stulist',   // 查看学生列表
    STUEDIT: 'schoolsign/teacher/stuedit',   // 编辑学生姓名
    STUDEL: 'schoolsign/teacher/studel',   // 删除学生
    ACTADD: 'schoolsign/teacher/actadd',   // 添加签到活动
  };

  constructor(
    private http: HttpClient,
    private jsonp: HttpClientJsonpModule
  ) { }

  getMusicList(): Observable<MusicResponse> {
    const callback = 'callback=' + '__ng_jsonp__.__req' + MusicService.times + '.finished';
    // const callback = 'callback=JSONP_CALLBACK';
    MusicService.times ++;
    const url =  this.musicUrl + this.callBackUrl;
    // return this.http.get<MusicResponse>(url).subscribe(data => { console.log('data: ' + data); });
    // return this.http.jsonp<MusicResponse>(this.musicUrl, this.callBackUrl);
    return this.http.get<MusicResponse>(this.musicUrl, httpParams);
  }

}
