import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DoacaoInternaComponent } from "./doacao-interna.component";

describe("DoacaoInternaComponent", () => {
  let component: DoacaoInternaComponent;
  let fixture: ComponentFixture<DoacaoInternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoacaoInternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoacaoInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
