import { Component, OnInit, ElementRef, ViewChildren, EventEmitter, Output } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { Event } from '../oio-models/event';
@Component({
  selector: 'oio-navbar',
  templateUrl: './oio-navbar.component.html',
  styleUrls: ['./oio-navbar.component.scss'],
  animations: [
    trigger('headerTrigger', [
      state('untouched', style({ top: '500px', position: 'relative' })),
      state('shrink', style({ top: '0px', transform: 'scale(1)' })),
      state('expand', style({ top: '0px', transform: 'scale(1.05)' })),
      transition('shrink <=> expand', [animate(200)])
    ])
  ]
})
export class OioNavbarComponent implements OnInit {
  @Output() navbarItemEmitter: EventEmitter<Event> = new EventEmitter();
  navbarItems: Array<string> = ['About','Shows','Music','Merch'];
  private headerState: string = 'untouched'; 
  constructor(private elementRef: ElementRef) { }
  ngOnInit() {
  }
  mouseEnter() {
    this.headerState = 'expand';    
  }
  mouseLeave() {
    this.headerState = 'shrink';
  }
  onClick(event, navbarItem: string) {
    let eventSource = event.target || event.srcElement;
    let navbarElements: Array<HTMLElement> = Array.prototype.slice.call(this.elementRef.nativeElement.getElementsByTagName('span'));;
    navbarElements.forEach((navbarElement) => {
      navbarElement.classList.remove('selected');
      navbarElement.classList.add('unselected');
    });
    eventSource.classList.remove('unselected');
    eventSource.classList.add('selected');
    this.navbarItemEmitter.emit({ name: navbarItem, data: {} , eventType: 'navbar'})
  }
}
