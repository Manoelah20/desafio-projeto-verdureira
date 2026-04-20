export class Produto {
  constructor(
    public readonly id: number,
    public readonly descricao: string,
    public quantidadeEstoque: number,
  ) { }
}

export class Verdureira {
  private produtos: Produto[] = [
    new Produto(1, "Maçã", 20),
    new Produto(2, "Laranja", 0),
    new Produto(3, "Limão", 20),
  ];

  private buscarProdutoPorId(produtoId: number): Produto | undefined {
    return this.produtos.find((p) => p.id === produtoId);
  }

  getDescricaoProduto(produtoId: number): string {
    const produto = this.buscarProdutoPorId(produtoId);
    return !produto
      ? "Produto não encontrado."
      : `${produto.id} - ${produto.descricao} (${produto.quantidadeEstoque}x)`;
  }

  hasEstoqueProduto(produtoId: number): boolean {
    const produto = this.buscarProdutoPorId(produtoId);
    return !!produto && produto.quantidadeEstoque > 0;
  }
}

export interface PaginaParams {
  pagina: number;
  tamanho: number;
}
export interface Pagina<T> {
  itens: T[];
  total: number;
}

export function filtrarEPaginar<T>(
  data: T[],
  filterFn: (item: T) => boolean,
  params: PaginaParams,
): Pagina<T> {
  const filtrados = data.filter(filterFn);
  const inicio = (params.pagina - 1) * params.tamanho;
  return {
    itens: filtrados.slice(inicio, inicio + params.tamanho),
    total: filtrados.length,
  };
}
