import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'oio-body',
  templateUrl: './oio-body.component.html',
  styleUrls: ['./oio-body.component.scss']
})
export class OioBodyComponent implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
