import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroParceiroComponent } from './cadastro-parceiro.component';

describe('CadastroParceiroComponent', () => {
  let component: CadastroParceiroComponent;
  let fixture: ComponentFixture<CadastroParceiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroParceiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroParceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
