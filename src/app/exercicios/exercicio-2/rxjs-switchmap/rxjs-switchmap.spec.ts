import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSwitchmapComponent } from './rxjs-switchmap';

describe('RxjsSwitchmapComponent', () => {
  let component: RxjsSwitchmapComponent;
  let fixture: ComponentFixture<RxjsSwitchmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsSwitchmapComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RxjsSwitchmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
