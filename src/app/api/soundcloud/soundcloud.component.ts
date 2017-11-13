import { Component, OnChanges, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { trigger, transition, animate, style } from '@angular/animations';
export class SoundcloudSong {
  name: string;
  widget: string; 
}

@Component({
  selector: 'app-soundcloud',
  templateUrl: './soundcloud.component.html',
  styleUrls: ['./soundcloud.component.scss'],
  animations: []
})
export class SoundcloudComponent implements OnChanges {
  @Input() songName: string;
  sanitizer: DomSanitizer;
  currentSong: string;
  private widgetList: Array<SoundcloudSong> = [ {
    name: 'EP',
    widget: '<iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/373442420&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>'
  }
]
  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
   }

  ngOnChanges() {
    this.currentSong = this.getSongWidget(this.songName).widget;
  }
  getSongWidget(songname: string): SoundcloudSong {
    return this.widgetList.find((value) => value.name === songname);
  }
}
