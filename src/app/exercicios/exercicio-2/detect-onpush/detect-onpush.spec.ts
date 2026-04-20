import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DetectOnpushComponent } from "./detect-onpush";

describe("DetectOnpushComponent", () => {
  let component: DetectOnpushComponent;
  let fixture: ComponentFixture<DetectOnpushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetectOnpushComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetectOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
