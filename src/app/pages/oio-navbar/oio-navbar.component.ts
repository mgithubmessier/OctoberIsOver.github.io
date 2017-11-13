import { Component, OnInit, ElementRef, ViewChildren, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'oio-navbar',
  templateUrl: './oio-navbar.component.html',
  styleUrls: ['./oio-navbar.component.scss']
})
export class OioNavbarComponent implements OnInit {
  @Output() navbarItemEmitter: EventEmitter<{ navbarItem: string, data: Object }> = new EventEmitter();
  navbarItems: Array<string> = ['About','Shows','Music','Artwork','Merch'];
  constructor(private elementRef: ElementRef) { }
  ngOnInit() {
  }
  onClick(event, navbarItem: string) {
    let eventSource = event.target || event.srcElement;
    console.log(event, navbarItem)
    let navbarElements: Array<HTMLElement> = Array.prototype.slice.call(this.elementRef.nativeElement.getElementsByTagName('span'));;
    navbarElements.forEach((navbarElement) => {
      navbarElement.classList.remove('selected');
      navbarElement.classList.add('unselected');
    });
    eventSource.classList.remove('unselected');
    eventSource.classList.add('selected');
    this.navbarItemEmitter.emit({ navbarItem: navbarItem, data: {} })
  }
}
