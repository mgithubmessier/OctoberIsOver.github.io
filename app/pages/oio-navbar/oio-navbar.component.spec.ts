import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OioNavbarComponent } from './oio-navbar.component';

describe('OioNavbarComponent', () => {
  let component: OioNavbarComponent;
  let fixture: ComponentFixture<OioNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OioNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OioNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
