import { Component, OnInit, OnChanges, AfterViewInit, Sanitizer, Input, NgZone } from '@angular/core';
import { SocialMediasConstant, SocialMedia,  } from '../../pages/oio-models/social-medias';
import { TwitterTimelineService } from '../twitter-timeline/twitter-timeline.service';

@Component({
  selector: 'social-medias',
  templateUrl: './social-medias.component.html',
  styleUrls: ['./social-medias.component.scss']
})
export class SocialMediasComponent implements OnInit, OnChanges {
  sanitizer: Sanitizer;
  socialMedias: Array<SocialMedia> = SocialMediasConstant.socialMedias;
  selectedSocialMedia: SocialMedia;
  @Input() selected: string;

  constructor(sanitizer: Sanitizer, private twitterTimelineService: TwitterTimelineService) { 
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.selectedSocialMedia = this.socialMedias.find((socialMedia) => socialMedia.name === this.selected);      
  }
  ngOnChanges() {
    this.selectedSocialMedia = this.socialMedias.find((socialMedia) => socialMedia.name === this.selected);      
  }
}
