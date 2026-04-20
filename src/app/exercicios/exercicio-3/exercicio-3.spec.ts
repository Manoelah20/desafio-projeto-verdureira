import { describe, it, expect, beforeEach } from "vitest";
import { firstValueFrom } from "rxjs";
import { UsuarioService } from "../exercicio-4/exercicio-4.logic";
import {
  todoReducer,
  estadoInicial,
  loadTodos,
  loadTodosSuccess,
  loadTodosError,
  toggleTodoComplete,
  selectAllTodos,
  selectPendingTodos,
} from "./exercicio-3.logic";

describe("UsuarioService (Exercicio 4)", () => {
  let service: UsuarioService;

  beforeEach(() => {
    service = new UsuarioService();
  });

  it("deve listar usuários filtrados corretamente", async () => {
    const users = await firstValueFrom(service.listar("Manoela"));
    expect(users.length).toBe(1);
    expect(users[0].nome).toContain("Manoela");
  });
});

describe("NgRx Todo Reducer", () => {
  it("deve retornar estado inicial", () => {
    const state = todoReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual(estadoInicial);
  });

  it("deve definir loading true ao carregar todos", () => {
    const state = todoReducer(estadoInicial, loadTodos());
    expect(state.loading).toBe(true);
  });

  it("deve carregar todos com sucesso", () => {
    const todos = [
      { id: 1, titulo: "Teste", concluida: false },
    ];
    const state = todoReducer(
      { ...estadoInicial, loading: true },
      loadTodosSuccess({ todos })
    );
    expect(state.loading).toBe(false);
    expect(state.todos).toEqual(todos);
  });

  it("deve definir erro ao falhar carregamento", () => {
    const state = todoReducer(
      { ...estadoInicial, loading: true },
      loadTodosError({ erro: "Erro" })
    );
    expect(state.loading).toBe(false);
    expect(state.erro).toBe("Erro");
  });

  it("deve toggle todo complete", () => {
    const initialState = {
      ...estadoInicial,
      todos: [
        { id: 1, titulo: "Teste", concluida: false },
      ],
    };
    const state = todoReducer(initialState, toggleTodoComplete({ id: 1 }));
    expect(state.todos[0].concluida).toBe(true);
  });
});

describe("NgRx Selectors", () => {
  const mockState = {
    todos: [
      { id: 1, titulo: "Todo 1", concluida: false },
      { id: 2, titulo: "Todo 2", concluida: true },
      { id: 3, titulo: "Todo 3", concluida: false },
    ],
    loading: false,
    erro: null,
  };

  it("selectAllTodos deve retornar todos os todos", () => {
    const result = selectAllTodos({ todos: mockState });
    expect(result).toHaveLength(3);
  });

  it("selectPendingTodos deve retornar apenas não concluídos", () => {
    const result = selectPendingTodos({ todos: mockState });
    expect(result).toHaveLength(2);
    expect(result.every(t => !t.concluida)).toBe(true);
  });
});
