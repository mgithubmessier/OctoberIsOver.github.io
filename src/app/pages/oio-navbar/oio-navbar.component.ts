import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oio-navbar',
  templateUrl: './oio-navbar.component.html',
  styleUrls: ['./oio-navbar.component.scss']
})
export class OioNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onclick(source: string) {
    console.log(source);
  }
}
