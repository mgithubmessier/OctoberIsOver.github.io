import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '../oio-models/event';
import { SocialMediasConstant } from '../oio-models/social-medias';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'oio-footer',
  templateUrl: './oio-footer.component.html',
  styleUrls: ['./oio-footer.component.scss'],
  animations: [
    trigger('footerItemTrigger', [
      state('shrink', style({ transform: 'scale(1)' })),
      state('expand', style({ transform: 'scale(1.05)' })),
      transition('shrink <=> expand', [animate(200)])
    ])
  ]
})
export class OioFooterComponent implements OnInit {
  @Output() footerItemEmitter: EventEmitter<Event> = new EventEmitter();
  socialMedias = SocialMediasConstant.socialMedias;
  constructor() {  }

  ngOnInit() {
    
  }

  onClick(event, name: string) {
    this.footerItemEmitter.emit({name: name, data: {}, eventType: 'footer'})
  }
}
