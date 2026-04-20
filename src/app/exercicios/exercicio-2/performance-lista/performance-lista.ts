import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Item } from "./performance-lista.logic";

@Component({
  selector: "app-performance-lista",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./performance-lista.html",
  styleUrls: ["./performance-lista.css"],
})
export class PerformanceListaComponent {
  itens: Item[] = [
    { id: 1, nome: "Item A", descricao: "Descriçao A" },
    { id: 2, nome: "Item B", descricao: "Descriçao B" },
  ];
  itensFiltrados = [...this.itens];

  onFilter(event: Event): void {
    const termo = (event.target as HTMLInputElement).value.toLowerCase();
    this.itensFiltrados = this.itens.filter((i) =>
      i.nome.toLowerCase().includes(termo),
    );
  }

  trackById(index: number, item: Item): number {
    return item.id;
  }
}
