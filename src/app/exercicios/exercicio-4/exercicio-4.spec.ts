import { describe, it, expect, beforeEach } from "vitest";
import { firstValueFrom } from "rxjs";
import { UsuarioService } from "./exercicio-4.logic";

describe("UsuarioService", () => {
  let service: UsuarioService;

  beforeEach(() => {
    service = new UsuarioService();
  });

  // Teste com o refinamento do .pipe(first()) e tratamento de erro
  it("deve filtrar usuários pelo nome corretamente", async () => {
    const usuarios = await firstValueFrom(service.listar("Manoela"));
    expect(usuarios.length).toBe(1);
    expect(usuarios[0].nome).toContain("Manoela");
  });

  // O segundo teste também pode seguir o mesmo padrão se você desejar
  it("deve retornar lista vazia se não encontrar o nome", async () => {
    const usuarios = await firstValueFrom(service.listar("NomeInexistente"));
    expect(usuarios.length).toBe(0);
  });
});
