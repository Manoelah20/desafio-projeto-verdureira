import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio2 } from './exercicio-2';

describe('Exercicio2', () => {
  let component: Exercicio2;
  let fixture: ComponentFixture<Exercicio2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicio2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
