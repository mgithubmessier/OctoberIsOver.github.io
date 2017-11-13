import { Component, OnInit, ViewChild, ComponentFactoryResolver, ComponentFactory, Input, Type } from '@angular/core';

@Component({
  selector: 'oio-container',
  templateUrl: './oio-container.component.html',
  styleUrls: ['./oio-container.component.scss']
})
export class OioContainerComponent implements OnInit {
  navbarItem: string;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {  }
  navbarItemEmitted(event) {
    this.navbarItem = event.navbarItem;
  }
  ngOnInit() {
  }
}
