import { Injectable, inject, signal, computed } from "@angular/core";
import { Observable, of, delay, map } from "rxjs";

// Modelo de Dados
export interface Usuario {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  tipoTelefone: "celular" | "fixo";
}

@Injectable({ providedIn: "root" })
export class UsuarioService {
  private usuariosMock: Usuario[] = [
    {
      id: 1,
      nome: "Manoela Silva",
      email: "manoela@email.com",
      cpf: "123.456.789-00",
      telefone: "21999999999",
      tipoTelefone: "celular",
    },
    {
      id: 2,
      nome: "João Santos",
      email: "joao@email.com",
      cpf: "987.654.321-00",
      telefone: "21988888888",
      tipoTelefone: "celular",
    },
  ];

  listar(filtro: string): Observable<Usuario[]> {
    return of(this.usuariosMock).pipe(
      delay(500), // Simula latência
      map((lista) =>
        lista.filter((u) =>
          u.nome.toLowerCase().includes(filtro.toLowerCase()),
        ),
      ),
    );
  }
}

// Store com Signals para gerenciar o estado da tela
@Injectable()
export class UsuarioStore {
  private service = inject(UsuarioService);

  usuarios = signal<Usuario[]>([]);
  loading = signal(false);
  erro = signal<string | null>(null);

  carregar(filtro: string = "") {
    this.loading.set(true);
    this.service.listar(filtro).subscribe({
      next: (res) => {
        this.usuarios.set(res);
        this.loading.set(false);
      },
      error: () => {
        this.erro.set("Erro ao carregar usuários");
        this.loading.set(false);
      },
    });
  }
}
