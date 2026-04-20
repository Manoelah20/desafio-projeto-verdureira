import { of } from "rxjs";
import { delay } from "rxjs/operators";

export class PessoaService {
  buscarPorId(id: number) {
    return of({ id, nome: "João" }).pipe(delay(500));
  }
}
