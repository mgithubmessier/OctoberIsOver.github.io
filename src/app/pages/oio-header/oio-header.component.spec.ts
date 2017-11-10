import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OioHeaderComponent } from './oio-header.component';

describe('OioHeaderComponent', () => {
  let component: OioHeaderComponent;
  let fixture: ComponentFixture<OioHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OioHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
