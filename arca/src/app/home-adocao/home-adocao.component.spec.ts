import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdocaoComponent } from './home-adocao.component';

describe('HomeAdocaoComponent', () => {
  let component: HomeAdocaoComponent;
  let fixture: ComponentFixture<HomeAdocaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdocaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
