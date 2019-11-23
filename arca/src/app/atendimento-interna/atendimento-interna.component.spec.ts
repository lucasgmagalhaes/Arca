import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentoInternaComponent } from './atendimento-interna.component';

describe('AtendimentoInternaComponent', () => {
  let component: AtendimentoInternaComponent;
  let fixture: ComponentFixture<AtendimentoInternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtendimentoInternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendimentoInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
