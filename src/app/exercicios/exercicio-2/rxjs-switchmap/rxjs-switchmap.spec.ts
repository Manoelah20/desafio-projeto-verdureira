import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSwitchmap } from './rxjs-switchmap';

describe('RxjsSwitchmap', () => {
  let component: RxjsSwitchmap;
  let fixture: ComponentFixture<RxjsSwitchmap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsSwitchmap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsSwitchmap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
