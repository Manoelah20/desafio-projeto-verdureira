import { Component, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Subject, of } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
  takeUntil,
} from "rxjs/operators";
import { BuscaUsuarioService } from "./busca-debounce.logic";

@Component({
  selector: "app-busca-debounce",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./busca-debounce.html",
  styleUrls: ["./busca-debounce.css"],
})
export class BuscaDebounceComponent implements OnDestroy {
  termoBusca = "";
  isLoading = false;
  private search$ = new Subject<string>();
  private destroy$ = new Subject<void>();

  resultados$ = this.search$.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    tap(() => (this.isLoading = true)),
    switchMap((termo) =>
      termo
        ? of([{ nome: "Resultado Mock", email: "test@test.com" }]).pipe(
          tap(() => (this.isLoading = false)),
        )
        : of([]),
    ),
    takeUntil(this.destroy$),
  );

  onSearch(event: Event): void {
    const termo = (event.target as HTMLInputElement).value;
    this.termoBusca = termo;
    this.search$.next(termo);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
