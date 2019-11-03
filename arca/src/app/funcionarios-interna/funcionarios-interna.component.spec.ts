import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosInternaComponent } from './funcionarios-interna.component';

describe('FuncionariosInternaComponent', () => {
  let component: FuncionariosInternaComponent;
  let fixture: ComponentFixture<FuncionariosInternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionariosInternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
