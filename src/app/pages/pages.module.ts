import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { OioNavbarComponent } from './oio-navbar/oio-navbar.component';
import { OioFooterComponent } from './oio-footer/oio-footer.component';
import { OioBodyComponent } from './oio-body/oio-body.component';
import { OioContainerComponent } from './oio-container/oio-container.component';
import { CommonModule } from '@angular/common';
import { ApiModule } from '../api/api.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [FlexLayoutModule, CommonModule, ApiModule, BrowserAnimationsModule],
  declarations: [OioNavbarComponent, OioFooterComponent, OioBodyComponent, OioContainerComponent],
  exports: [OioNavbarComponent, OioFooterComponent, OioBodyComponent, OioContainerComponent]
})
export class PagesModule { }
