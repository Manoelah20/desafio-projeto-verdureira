import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DetecaoOnpush } from "./detecao-onpush";

describe("DetecaoOnpush", () => {
  let component: DetecaoOnpush;
  let fixture: ComponentFixture<DetecaoOnpush>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetecaoOnpush],
    }).compileComponents();

    fixture = TestBed.createComponent(DetecaoOnpush);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
