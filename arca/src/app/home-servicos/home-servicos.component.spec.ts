import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServicosComponent } from './home-servicos.component';

describe('HomeServicosComponent', () => {
  let component: HomeServicosComponent;
  let fixture: ComponentFixture<HomeServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
