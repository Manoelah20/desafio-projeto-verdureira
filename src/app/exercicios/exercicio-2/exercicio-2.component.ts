import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetectOnpushComponent } from "./detect-onpush/detect-onpush";
import { RxjsSwitchmapComponent } from "./rxjs-switchmap/rxjs-switchmap";
import { BuscaDebounceComponent } from "./busca-debounce/busca-debounce";
import { PerformanceListaComponent } from "./performance-lista/performance-lista";

@Component({
  selector: "app-exercicio-2",
  standalone: true,
  imports: [
    CommonModule,
    DetectOnpushComponent,
    RxjsSwitchmapComponent,
    BuscaDebounceComponent,
    PerformanceListaComponent,
  ],
  templateUrl: "./exercicio-2.component.html",
  styleUrls: ["./exercicio-2.css"],
})
export class Exercicio2Component { }
