import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaisInternaComponent } from './animais-interna.component';

describe('AnimaisInternaComponent', () => {
  let component: AnimaisInternaComponent;
  let fixture: ComponentFixture<AnimaisInternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaisInternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaisInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
