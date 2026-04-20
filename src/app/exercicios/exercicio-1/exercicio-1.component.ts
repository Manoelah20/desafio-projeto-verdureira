import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
// Importamos a lógica que criamos no outro arquivo
import { Verdureira, filtrarEPaginar, Pagina } from "./exercicio-1.logic";

@Component({
  selector: "app-exercicio-1",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./exercicio-1.component.html",
  styleUrls: ["./exercicio-1.component.css"],
})
export class Exercicio1Component implements OnInit {
  // Variáveis para o HTML exibir
  resumoProduto: string = "";
  temEstoque: boolean = false;
  resultadoPaginacao?: Pagina<{ nome: string }>;

  ngOnInit() {
    // Resposta 1.1
    const v = new Verdureira();
    this.resumoProduto = v.getDescricaoProduto(1);
    this.temEstoque = v.hasEstoqueProduto(2);

    // Resposta 1.2
    const listaUsuarios = [
      { nome: "Manoela" },
      { nome: "Ana" },
      { nome: "Manoel" },
      { nome: "Maria" },
    ];
    this.resultadoPaginacao = filtrarEPaginar(
      listaUsuarios,
      (u) => u.nome.includes("Mano"),
      { pagina: 1, tamanho: 2 },
    );
  }
}
