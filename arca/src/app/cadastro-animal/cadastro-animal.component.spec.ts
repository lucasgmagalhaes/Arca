import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAnimalComponent } from './cadastro-animal.component';

describe('CadastroAnimalComponent', () => {
  let component: CadastroAnimalComponent;
  let fixture: ComponentFixture<CadastroAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
