import { Component, OnInit, ViewChild } from '@angular/core';
import { OioBodyDirective } from '../oio-body/oio-body.directive';
@Component({
  selector: 'oio-container',
  templateUrl: './oio-container.component.html',
  styleUrls: ['./oio-container.component.scss']
})
export class OioContainerComponent implements OnInit {
  @ViewChild(OioBodyDirective)
  body: OioBodyDirective;
  constructor() { }

  ngOnInit() {
  }

}
