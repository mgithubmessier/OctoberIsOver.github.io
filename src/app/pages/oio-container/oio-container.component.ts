import { Component, OnInit, ViewChild, ComponentFactoryResolver, ComponentFactory, Input, Type } from '@angular/core';
import { Event } from '../oio-models/event';
import { SocialMedia } from '../oio-models/social-medias';

@Component({
  selector: 'oio-container',
  templateUrl: './oio-container.component.html',
  styleUrls: ['./oio-container.component.scss']
})
export class OioContainerComponent implements OnInit {
  event: Event;
  selectedSocialMediaName: string;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {  }
  handler(event: Event) {
    this.event = event;
    if(this.event.eventType === 'footer') {
      this.selectedSocialMediaName = this.event.name;
    }
  }
  ngOnInit() {
  }
}
