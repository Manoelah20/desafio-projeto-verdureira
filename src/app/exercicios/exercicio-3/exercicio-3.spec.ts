import { describe, it, expect, beforeEach } from "vitest";
import { UsuarioService } from "./exercicio-4.logic";

describe("UsuarioService (Exercicio 4)", () => {
  let service: UsuarioService;

  beforeEach(() => {
    service = new UsuarioService();
  });

  it("deve listar usuários filtrados corretamente", (done) => {
    service.listar({ nome: "Manoela" }).subscribe((users) => {
      expect(users.length).toBe(1);
      expect(users[0].nome).toContain("Manoela");
      done();
    });
  });
});
