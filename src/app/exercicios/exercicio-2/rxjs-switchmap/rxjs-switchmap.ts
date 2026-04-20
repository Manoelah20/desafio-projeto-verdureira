import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { switchMap, takeUntil, map } from "rxjs/operators";
import { PessoaService } from "./rxjs-switchmap.logic";

@Component({
  selector: "app-rxjs-switchmap",
  standalone: true,
  providers: [PessoaService],
  templateUrl: "./rxjs-switchmap.html",
})
export class RxjsSwitchmapComponent implements OnInit, OnDestroy {
  texto: string = "";
  private destroy$ = new Subject<void>();

  constructor(private readonly pessoaService: PessoaService) {}

  ngOnInit(): void {
    const pessoaId = 1;
    this.pessoaService
      .buscarPorId(pessoaId)
      .pipe(
        switchMap((pessoa) =>
          this.pessoaService
            .buscarQuantidadeFamiliares(pessoaId)
            .pipe(map((qtd) => ({ pessoa, qtd }))),
        ),
        takeUntil(this.destroy$),
      )
      .subscribe(({ pessoa, qtd }) => {
        this.texto = `Nome: ${pessoa.nome} | familiares: ${qtd}`;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
