export interface Usuario {
  id: number;
  nome: string;
  email: string;
}

// Simulando um serviço que seria do HttpClient
export class BuscaUsuarioService {
  // Em um cenário real, você injetaria o HttpClient aqui
  buscar(termo: string) {
    // Mock de retorno
    return [{ id: 1, nome: "Manoela", email: "mano@dev.com" }];
  }
}
