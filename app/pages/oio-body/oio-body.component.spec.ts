import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OioBodyComponent } from './oio-body.component';

describe('OioBodyComponent', () => {
  let component: OioBodyComponent;
  let fixture: ComponentFixture<OioBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OioBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OioBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
