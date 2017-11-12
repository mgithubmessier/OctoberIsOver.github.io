import { NgModule } from '@angular/core';
import { SoundcloudComponent } from './soundcloud/soundcloud.component';

@NgModule({
  declarations: [SoundcloudComponent],
  exports: [SoundcloudComponent]
})
export class ApiModule { }
