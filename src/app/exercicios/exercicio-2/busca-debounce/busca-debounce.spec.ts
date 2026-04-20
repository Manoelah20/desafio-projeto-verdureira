import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaDebounce } from './busca-debounce';

describe('BuscaDebounce', () => {
  let component: BuscaDebounce;
  let fixture: ComponentFixture<BuscaDebounce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaDebounce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaDebounce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
