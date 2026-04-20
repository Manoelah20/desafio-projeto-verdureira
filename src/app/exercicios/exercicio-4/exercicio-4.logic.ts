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

  criar(usuario: Omit<Usuario, 'id'>): Observable<Usuario> {
    const novoUsuario: Usuario = {
      ...usuario,
      id: Math.max(...this.usuariosMock.map(u => u.id)) + 1,
    };
    this.usuariosMock.push(novoUsuario);
    return of(novoUsuario).pipe(delay(300));
  }

  editar(usuario: Usuario): Observable<void> {
    const index = this.usuariosMock.findIndex(u => u.id === usuario.id);
    if (index !== -1) {
      this.usuariosMock[index] = usuario;
    }
    return of(void 0).pipe(delay(300));
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

  criar(usuario: Omit<Usuario, 'id'>) {
    this.loading.set(true);
    this.service.criar(usuario).subscribe({
      next: (novoUsuario) => {
        this.usuarios.update(lista => [...lista, novoUsuario]);
        this.loading.set(false);
      },
      error: () => {
        this.erro.set("Erro ao criar usuário");
        this.loading.set(false);
      },
    });
  }

  editar(usuario: Usuario) {
    this.loading.set(true);
    this.service.editar(usuario).subscribe({
      next: () => {
        this.usuarios.update(lista =>
          lista.map(u => u.id === usuario.id ? usuario : u)
        );
        this.loading.set(false);
      },
      error: () => {
        this.erro.set("Erro ao editar usuário");
        this.loading.set(false);
      },
    });
  }
}
