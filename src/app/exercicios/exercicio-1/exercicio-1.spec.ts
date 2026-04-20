import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Exercicio1Component } from './exercicio-1.component';
import { Verdureira, filtrarEPaginar, PaginaParams } from './exercicio-1.logic';

describe('Exercicio1Component', () => {
  let component: Exercicio1Component;
  let fixture: ComponentFixture<Exercicio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercicio1Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Exercicio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with product description', () => {
    expect(component.resumoProduto).toBeTruthy();
    expect(component.resumoProduto).toContain('Maçã');
  });

  it('should check stock correctly', () => {
    expect(component.temEstoque).toBe(true);
  });

  it('should have pagination result', () => {
    expect(component.resultadoPaginacao).toBeTruthy();
    expect(component.resultadoPaginacao?.total).toBeGreaterThan(0);
  });
});

describe('Verdureira', () => {
  let verdureira: Verdureira;

  beforeEach(() => {
    verdureira = new Verdureira();
  });

  it('should return product description', () => {
    const descricao = verdureira.getDescricaoProduto(1);
    expect(descricao).toContain('Maçã');
    expect(descricao).toContain('20');
  });

  it('should return not found message for invalid product', () => {
    const descricao = verdureira.getDescricaoProduto(999);
    expect(descricao).toBe('Produto não encontrado.');
  });

  it('should check if product has stock', () => {
    expect(verdureira.hasEstoqueProduto(1)).toBe(true);
    expect(verdureira.hasEstoqueProduto(2)).toBe(false);
  });

  it('should return false for non-existent product stock check', () => {
    expect(verdureira.hasEstoqueProduto(999)).toBe(false);
  });
});

describe('filtrarEPaginar', () => {
  const dados = [
    { nome: 'Ana' },
    { nome: 'Manoela' },
    { nome: 'Manoel' },
    { nome: 'Maria' },
  ];

  it('should filter and paginate correctly', () => {
    const params: PaginaParams = { pagina: 1, tamanho: 2 };
    const resultado = filtrarEPaginar(dados, (u) => u.nome.includes('Mano'), params);

    expect(resultado.total).toBe(2);
    expect(resultado.itens.length).toBe(2);
    expect(resultado.itens[0].nome).toBe('Manoela');
  });

  it('should return empty when no items match filter', () => {
    const params: PaginaParams = { pagina: 1, tamanho: 2 };
    const resultado = filtrarEPaginar(dados, (u) => u.nome.includes('XYZ'), params);

    expect(resultado.total).toBe(0);
    expect(resultado.itens.length).toBe(0);
  });

  it('should handle pagination correctly', () => {
    const params: PaginaParams = { pagina: 2, tamanho: 1 };
    const resultado = filtrarEPaginar(dados, (u) => u.nome.includes('Mano'), params);

    expect(resultado.total).toBe(2);
    expect(resultado.itens.length).toBe(1);
    expect(resultado.itens[0].nome).toBe('Manoel');
  });
});
