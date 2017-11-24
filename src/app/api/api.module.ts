import { NgModule } from '@angular/core';
import { SoundcloudComponent } from './soundcloud/soundcloud.component';
import { SocialMediasComponent } from './social-medias/social-medias.component';
import { CommonModule } from '@angular/common';
import { TwitterTimelineComponent } from './twitter-timeline/twitter-timeline.component';
import { TwitterTimelineService } from './twitter-timeline/twitter-timeline.service';

@NgModule({
  imports: [CommonModule],
  declarations: [SoundcloudComponent, SocialMediasComponent, TwitterTimelineComponent],
  exports: [SoundcloudComponent, SocialMediasComponent, TwitterTimelineComponent],
  providers: [TwitterTimelineService]
})
export class ApiModule { }
