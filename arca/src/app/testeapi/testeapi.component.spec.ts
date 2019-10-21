import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TESTEAPIComponent } from './testeapi.component';

describe('TESTEAPIComponent', () => {
  let component: TESTEAPIComponent;
  let fixture: ComponentFixture<TESTEAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TESTEAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TESTEAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
