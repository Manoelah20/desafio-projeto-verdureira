import { of } from "rxjs";
import { delay } from "rxjs/operators";

export class PessoaService {
  buscarPorId(id: number) {
    return of({ id, nome: "João" }).pipe(delay(500));
  }
  buscarQuantidadeFamiliares(id: number) {
    return of(Math.floor(Math.random() * 10)).pipe(delay(300));
  }
}
