import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OioFooterComponent } from './oio-footer.component';

describe('OioFooterComponent', () => {
  let component: OioFooterComponent;
  let fixture: ComponentFixture<OioFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OioFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OioFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
