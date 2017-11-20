import { NgModule } from '@angular/core';
import { SoundcloudComponent } from './soundcloud/soundcloud.component';
import { SocialMediasComponent } from './social-medias/social-medias.component';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';
@NgModule({
  imports: [Ng4TwitterTimelineModule],
  declarations: [SoundcloudComponent, SocialMediasComponent],
  exports: [SoundcloudComponent, SocialMediasComponent]
})
export class ApiModule { }
