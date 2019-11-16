import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormatDatepickerComponent } from "./format-datepicker.component";

describe("FormatDatepickerComponent", () => {
  let component: FormatDatepickerComponent;
  let fixture: ComponentFixture<FormatDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormatDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
