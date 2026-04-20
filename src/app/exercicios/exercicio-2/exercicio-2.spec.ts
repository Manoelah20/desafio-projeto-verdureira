import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio2Component } from './exercicio-2.component';
import { STATUS_LISTA, ExercicioStatus } from './exercicio-2.logic';

describe('Exercicio2Component', () => {
  let component: Exercicio2Component;
  let fixture: ComponentFixture<Exercicio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio2Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Exercicio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Exercicio 2 - Status', () => {
  it('deve ter 4 sessões de exercícios', () => {
    expect(STATUS_LISTA).toHaveLength(4);
  });

  it('todas as sessões devem estar concluídas', () => {
    const todasConcluidas = STATUS_LISTA.every(
      (status: ExercicioStatus) => status.status === 'Concluido'
    );
    expect(todasConcluidas).toBe(true);
  });

  it('deve ter sessões 2.1, 2.2, 2.3 e 2.4', () => {
    const sessoes = STATUS_LISTA.map((s: ExercicioStatus) => s.sessao);
    expect(sessoes).toContain('2.1');
    expect(sessoes).toContain('2.2');
    expect(sessoes).toContain('2.3');
    expect(sessoes).toContain('2.4');
  });
});
