import {
  Component,
  OnInit,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { UsuarioStore } from "./exercicio-4.logic";
import { Subject, debounceTime, distinctUntilChanged } from "rxjs";

@Component({
  selector: "app-exercicio-4",
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [UsuarioStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./exercicio-4.html",
  styleUrls: ["./exercicio-4.css"],
})
export class Exercicio4Component implements OnInit {
  public store = inject(UsuarioStore);
  private buscaSubject = new Subject<string>();

  ngOnInit() {
    this.store.carregar();

    // Implementação de Debounce de 300ms com RxJS
    this.buscaSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((termo) => this.store.carregar(termo));
  }

  onBusca(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.buscaSubject.next(valor);
  }
}
