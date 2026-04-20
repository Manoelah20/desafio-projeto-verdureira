import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceLista } from './performance-lista';

describe('PerformanceLista', () => {
  let component: PerformanceLista;
  let fixture: ComponentFixture<PerformanceLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
