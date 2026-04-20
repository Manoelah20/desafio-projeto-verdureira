import {
  createAction,
  props,
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from "@ngrx/store";

// --- INTERFACES ---
export interface CartItem {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
}

export interface Todo {
  id: number;
  titulo: string;
  concluida: boolean;
}

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  erro: string | null;
}

// --- LOGICA NGRX (Actions, Reducer, Selectors) ---
export const loadTodos = createAction("[Todo] Load Todos");
export const loadTodosSuccess = createAction(
  "[Todo] Load Todos Success",
  props<{ todos: Todo[] }>(),
);
export const loadTodosError = createAction(
  "[Todo] Load Todos Error",
  props<{ erro: string }>(),
);
export const toggleTodoComplete = createAction(
  "[Todo] Toggle Todo Complete",
  props<{ id: number }>(),
);

export const estadoInicial: TodoState = {
  todos: [],
  loading: false,
  erro: null,
};

export const todoReducer = createReducer(
  estadoInicial,
  on(loadTodos, (state) => ({ ...state, loading: true })),
  on(loadTodosSuccess, (state, { todos }) => ({
    ...state,
    todos,
    loading: false,
  })),
  on(loadTodosError, (state, { erro }) => ({ ...state, loading: false, erro })),
  on(toggleTodoComplete, (state, { id }) => ({
    ...state,
    todos: state.todos.map((t) =>
      t.id === id ? { ...t, concluida: !t.concluida } : t,
    ),
  })),
);

export const selectTodoState = createFeatureSelector<TodoState>("todos");
export const selectAllTodos = createSelector(
  selectTodoState,
  (state) => state.todos,
);
export const selectPendingTodos = createSelector(
  selectTodoState,
  (state) => state.todos.filter((t) => !t.concluida),
);
