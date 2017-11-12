import { Component, OnInit, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'oio-navbar',
  templateUrl: './oio-navbar.component.html',
  styleUrls: ['./oio-navbar.component.scss']
})
export class OioNavbarComponent implements OnInit {
  navbarItems: Array<string> = ['About','Shows','Music','Artwork','Merch'];
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }
  onClick(event, navbarItem: string) {
    let navbarElements: Array<HTMLElement> = Array.prototype.slice.call(this.elementRef.nativeElement.getElementsByTagName('span'));;
    navbarElements.forEach((navbarElement) => {
      navbarElement.classList.remove('selected');
      navbarElement.classList.add('unselected');
    });
    event.srcElement.classList.remove('unselected');
    event.srcElement.classList.add('selected');
  }
}
