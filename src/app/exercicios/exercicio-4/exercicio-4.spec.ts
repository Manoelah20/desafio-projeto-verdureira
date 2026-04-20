import { describe, it, expect, beforeEach } from "vitest";
import { first } from "rxjs";
import { UsuarioService } from "./exercicio-4.logic";

describe("UsuarioService", () => {
  let service: UsuarioService;

  beforeEach(() => {
    service = new UsuarioService();
  });

  // Teste com o refinamento do .pipe(first()) e tratamento de erro
  it("deve filtrar usuários pelo nome corretamente", (done) => {
    service
      .listar("Manoela")
      .pipe(first())
      .subscribe({
        next: (usuarios) => {
          expect(usuarios.length).toBe(1);
          expect(usuarios[0].nome).toContain("Manoela");
          done();
        },
        error: (err) => done(err),
      });
  });

  // O segundo teste também pode seguir o mesmo padrão se você desejar
  it("deve retornar lista vazia se não encontrar o nome", (done) => {
    service
      .listar("NomeInexistente")
      .pipe(first())
      .subscribe({
        next: (usuarios) => {
          expect(usuarios.length).toBe(0);
          done();
        },
        error: (err) => done(err),
      });
  });
});
