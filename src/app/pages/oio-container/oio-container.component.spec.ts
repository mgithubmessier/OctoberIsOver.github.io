import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OioContainerComponent } from './oio-container.component';

describe('OioContainerComponent', () => {
  let component: OioContainerComponent;
  let fixture: ComponentFixture<OioContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OioContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
