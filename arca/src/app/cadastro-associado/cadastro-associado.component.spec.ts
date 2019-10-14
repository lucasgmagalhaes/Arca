import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAssociadoComponent } from './cadastro-associado.component';

describe('CadastroAssociadoComponent', () => {
  let component: CadastroAssociadoComponent;
  let fixture: ComponentFixture<CadastroAssociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAssociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAssociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
