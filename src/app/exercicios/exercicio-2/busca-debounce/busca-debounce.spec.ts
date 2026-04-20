import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaDebounceComponent } from './busca-debounce';

describe('BuscaDebounceComponent', () => {
  let component: BuscaDebounceComponent;
  let fixture: ComponentFixture<BuscaDebounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaDebounceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BuscaDebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
