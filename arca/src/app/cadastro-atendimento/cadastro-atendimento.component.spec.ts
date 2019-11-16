import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CadastroAtendimentoComponent } from "./cadastro-atendimento.component";

describe("CadastroAtendimentoComponent", () => {
  let component: CadastroAtendimentoComponent;
  let fixture: ComponentFixture<CadastroAtendimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroAtendimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
