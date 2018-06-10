import { Component, OnInit } from '@angular/core';
import {MusicService} from '../../../../service/music.service';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})
export class ClassificationComponent implements OnInit {

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.getClassification();
  }

  getClassification(): object {
    return this.musicService.getClassification()
      .subscribe(result => {
        console.log(result);
      });
  }

}
