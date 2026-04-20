import {
  Component,
  inject,
  Injectable,
  signal,
  computed,
  effect,
  output,
  ChangeDetectionStrategy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { catchError, map, switchMap, delay } from "rxjs/operators";
import {
  CartItem,
  loadTodos,
  loadTodosSuccess,
  loadTodosError,
  toggleTodoComplete,
  selectAllTodos,
} from "./exercicio-3.logic";

@Component({
  selector: "app-exercicio-3",
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./exercicio-3.html",
  styleUrls: ["./exercicio-3.css"],
})
export class Exercicio3Component {
  private store = inject(Store);

  private itensSignal = signal<CartItem[]>([]);
  readonly totalChanged = output<number>();
  readonly itens = this.itensSignal.asReadonly();

  readonly total = computed(() => {
    return this.itensSignal().reduce(
      (sum, item) => sum + item.quantidade * item.preco,
      0,
    );
  });

  constructor() {
    effect(() => {
      this.totalChanged.emit(this.total());
    });
  }

  adicionarAoCarrinho(nome: string, preco: number) {
    this.itensSignal.update((list) => [
      ...list,
      { id: Date.now(), nome, preco, quantidade: 1 },
    ]);
  }

  todos$ = this.store.select(selectAllTodos);

  carregarTodos() {
    this.store.dispatch(loadTodos());
  }

  toggleTodo(id: number) {
    this.store.dispatch(toggleTodoComplete({ id }));
  }
}

@Injectable({ providedIn: "root" })
export class TodoEffects {
  private actions$ = inject(Actions);
  private http = inject(HttpClient);

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        this.http
          .get<any[]>("https://jsonplaceholder.typicode.com/todos?_limit=5")
          .pipe(
            delay(1000),
            map((todos) =>
              loadTodosSuccess({
                todos: todos.map((t) => ({
                  id: t.id,
                  titulo: t.title,
                  concluida: t.completed,
                })),
              }),
            ),
            catchError((erro) => of(loadTodosError({ erro: erro.message }))),
          ),
      ),
    ),
  );
}
