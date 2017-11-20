import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SoundcloudComponent } from './soundcloud/soundcloud.component';
import { SocialMediasComponent } from './social-medias/social-medias.component';
import { Ng4TwitterTimelineModule } from 'ng4-twitter-timeline/lib/index';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [Ng4TwitterTimelineModule.forRoot(), CommonModule],
  declarations: [SoundcloudComponent, SocialMediasComponent],
  exports: [SoundcloudComponent, SocialMediasComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ApiModule { }
