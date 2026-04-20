import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceListaComponent } from './performance-lista';

describe('PerformanceListaComponent', () => {
  let component: PerformanceListaComponent;
  let fixture: ComponentFixture<PerformanceListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceListaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PerformanceListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
