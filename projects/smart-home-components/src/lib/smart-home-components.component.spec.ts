import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartHomeComponentsComponent } from './smart-home-components.component';

describe('SmartHomeComponentsComponent', () => {
  let component: SmartHomeComponentsComponent;
  let fixture: ComponentFixture<SmartHomeComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartHomeComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartHomeComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
