import { Input, Component, OnInit, ElementRef, ViewChildren, EventEmitter, Output } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { Event } from '../oio-models/event';
@Component({
  selector: 'oio-navbar',
  templateUrl: './oio-navbar.component.html',
  styleUrls: ['./oio-navbar.component.scss'],
  animations: [
    trigger('headerTrigger', [
      state('untouched', style({ top: '30vh', position: 'relative' })),
      state('touched', style({ top: '0px', transform: 'scale(1)' })),

      transition('untouched => touched', [animate(100)])
    ])
  ]
})
export class OioNavbarComponent implements OnInit {
  @Output() navbarItemEmitter: EventEmitter<Event> = new EventEmitter();
  navbarItems: Array<string> = ['About','Shows','Music','Merch'];
  @Input() headerState: string = 'untouched'; 
  constructor(private elementRef: ElementRef) { }
  ngOnInit() {
  }
  onClick(event, navbarItem: string) {
    this.headerState = 'touched';    
    let eventSource = event.target || event.srcElement;

    /** @todo change how you are accessing the elements inside of this nav */
    /** @todo change how you are adding and removing classes from them */
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
