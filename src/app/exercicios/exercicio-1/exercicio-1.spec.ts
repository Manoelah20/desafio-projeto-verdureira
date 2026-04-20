import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicio1 } from './exercicio-1';

describe('Exercicio1', () => {
  let component: Exercicio1;
  let fixture: ComponentFixture<Exercicio1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercicio1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
