import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../../service/music.service';
import { MusicResponse } from '../../../../bean/music/music-response';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  musicResponse: MusicResponse;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.getMusicList();
  }

  getMusicList(): object {
    return this.musicService.getMusicList()
      .subscribe(result => {
        console.log(result.data);
        this.musicResponse = result; });
  }

}
