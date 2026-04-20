import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
} from "@angular/core";
import { Subscription } from "rxjs";
import { PessoaService } from "./detecao-onpush.logic";

@Component({
  selector: "app-detecao-onpush",
  standalone: true,
  providers: [PessoaService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./detecao-onpush.html",
  styleUrls: ["./detecao-onpush.css"],
})
export class DetecaoOnpushComponent implements OnInit, OnDestroy {
  texto: string = "";
  contador = 0;
  private subscriptionBuscarPessoa?: Subscription;
  private intervalId: any;

  constructor(
    private readonly pessoaService: PessoaService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.subscriptionBuscarPessoa = this.pessoaService
      .buscarPorId(1)
      .subscribe((pessoa) => {
        this.texto = `Nome: ${pessoa.nome}`;
        this.cdr.markForCheck(); // Notifica o Angular OnPush
      });

    this.intervalId = setInterval(() => {
      this.contador++;
      this.cdr.markForCheck();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.subscriptionBuscarPessoa?.unsubscribe();
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
