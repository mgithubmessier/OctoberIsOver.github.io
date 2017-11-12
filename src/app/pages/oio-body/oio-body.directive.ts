import { Directive, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[oio-body]'
})
export class OioBodyDirective implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

}
