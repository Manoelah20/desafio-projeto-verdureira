import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-busca-debounce',
  template: `
    <div class="busca-debounce-demo">
      <h2>Exercício 2.2: Busca com Debounce e Async Pipe</h2>
      
      <div class="demo-section">
        <h3>🔍 Campo de Busca com Debounce</h3>
        
        <div class="search-box">
          <input 
            type="text" 
            placeholder="Digite para buscar..." 
            [value]="searchTerm"
            (input)="onSearch($event)"
            class="search-input"
          />
          <span class="loading" *ngIf="isLoading">⏳ Carregando...</span>
        </div>
        
        <!-- ============================================================ -->
        <!-- 🔴🔴🔴 ASYNC PIPE EM DESTAQUE 🔴🔴🔴 -->
        <!-- ============================================================ -->
        <!-- O async pipe subscribe automaticamente ao Observable e -->
        <!-- atualiza a view quando novos valores são emitidos -->
        <!-- ============================================================ -->
        
        <div class="results-section">
          <h4>Resultados da busca (com async pipe):</h4>
          <div class="async-pipe-highlight">
            <code>&lt;div *ngIf="results$ | async as results"&gt;</code>
          </div>
          
          <div *ngIf="results$ | async as results" class="results-list">
            <div *ngIf="results.length === 0" class="no-results">
              Nenhum resultado encontrado para "{{ searchTerm }}"
            </div>
            <div *ngFor="let result of results" class="result-item">
              <strong>{{ result.name }}</strong> - {{ result.email }}
            </div>
          </div>
        </div>
        
        <div class="info-box">
          <h4>📝 Como funciona o Async Pipe:</h4>
          <ul>
            <li><code>results$ | async</code> - Subscribe automaticamente ao Observable</li>
            <li>Atualiza a view quando novos valores são emitidos</li>
            <li>Faz unsubscribe automaticamente quando o componente é destruído</li>
            <li>Elimina a necessidade de armazenar o resultado em uma variável</li>
          </ul>
        </div>
        
        <div class="explanation">
          <h4>⚡ Operadores RxJS usados:</h4>
          <ul>
            <li><strong>debounceTime(300)</strong> - Aguarda 300ms após o último input antes de emitir</li>
            <li><strong>distinctUntilChanged()</strong> - Só emite se o valor realmente mudou</li>
            <li><strong>switchMap()</strong> - Cancela requisições anteriores e faz a nova busca</li>
          </ul>
        </div>
        
        <div class="code-example">
          <h4>💻 Código TypeScript:</h4>
          <pre><code>search$ = new Subject&lt;string&gt;();

results$ = this.search$.pipe(
  debounceTime(300),              // ⏱️ Aguarda 300ms
  distinctUntilChanged(),          // 🔄 Ignora valores repetidos
  switchMap(term =&gt;               // 🔄 Cancela requisições anteriores
    this.http.get(\`/api/users?q=\${term}\`)
  )
);

onSearch(event: Event) {
  const term = (event.target as HTMLInputElement).value;
  this.search$.next(term);        // 📤 Emite novo valor
}</code></pre>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .busca-debounce-demo {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    .demo-section {
      border: 2px solid #2196F3;
      border-radius: 8px;
      padding: 20px;
      margin-top: 20px;
    }
    .search-box {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 20px 0;
    }
    .search-input {
      flex: 1;
      padding: 12px;
      border: 2px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
    }
    .search-input:focus {
      outline: none;
      border-color: #2196F3;
    }
    .loading {
      color: #2196F3;
      font-weight: bold;
    }
    .results-section {
      margin-top: 20px;
    }
    .async-pipe-highlight {
      background-color: #fff3cd;
      border-left: 4px solid #ffc107;
      padding: 10px;
      margin-bottom: 15px;
    }
    .async-pipe-highlight code {
      background-color: #e8e8e8;
      padding: 8px 12px;
      border-radius: 4px;
      font-weight: bold;
      color: #d63384;
    }
    .results-list {
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 4px;
      padding: 15px;
      min-height: 100px;
    }
    .no-results {
      color: #6c757d;
      font-style: italic;
    }
    .result-item {
      padding: 8px;
      border-bottom: 1px solid #dee2e6;
    }
    .result-item:last-child {
      border-bottom: none;
    }
    .info-box {
      background-color: #d1ecf1;
      border-left: 4px solid #17a2b8;
      padding: 15px;
      margin: 20px 0;
    }
    .explanation {
      background-color: #d4edda;
      border-left: 4px solid #28a745;
      padding: 15px;
      margin: 20px 0;
    }
    .code-example {
      background-color: #f8f9fa;
      border: 1px solid #dee2e6;
      border-radius: 4px;
      padding: 15px;
      margin: 20px 0;
    }
    .code-example pre {
      background-color: #2d2d2d;
      color: #f8f8f2;
      padding: 15px;
      border-radius: 4px;
      overflow-x: auto;
    }
    ul {
      margin-left: 20px;
    }
    code {
      background-color: #e8e8e8;
      padding: 2px 6px;
      border-radius: 3px;
    }
  `]
})
export class BuscaDebounceComponent implements OnInit {
  searchTerm = '';
  isLoading = false;
  
  // ============================================================
  // 🔴 Subject para emitir valores de busca 🔴
  // ============================================================
  private search$ = new Subject<string>();
  
  // ============================================================
  // 🔴🔴🔴 OBSERVABLE COM ASYNC PIPE 🔴🔴🔴
  // ============================================================
  // Este Observable será usado com o async pipe no template
  // O async pipe faz subscribe automaticamente e atualiza a view
  // ============================================================
  results$ = this.search$.pipe(
    // ⏱️ Aguarda 300ms após o último input (evita muitas requisições)
    debounceTime(300),
    
    // 🔄 Só emite se o valor realmente mudou (evita duplicatas)
    distinctUntilChanged(),
    
    // 🔄 Cancela requisições anteriores e faz a nova busca
    switchMap(term => {
      this.isLoading = true;
      // Simulação de chamada HTTP
      return this.mockSearch(term);
    })
  );
  
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    // ============================================================
    // 🔴 Subscribe para controlar o loading state 🔴
    // ============================================================
    // Usamos um subscribe separado apenas para controlar o loading
    // Os resultados são exibidos via async pipe no template
    // ============================================================
    this.results$.subscribe(() => {
      this.isLoading = false;
    });
  }
  
  onSearch(event: Event) {
    const term = (event.target as HTMLInputElement).value;
    this.searchTerm = term;
    // 📤 Emite novo valor para o Subject
    this.search$.next(term);
  }
  
  // Simulação de busca HTTP
  private mockSearch(term: string) {
    const mockUsers = [
      { name: 'João Silva', email: 'joao@email.com' },
      { name: 'Maria Santos', email: 'maria@email.com' },
      { name: 'Pedro Oliveira', email: 'pedro@email.com' },
      { name: 'Ana Costa', email: 'ana@email.com' },
      { name: 'Carlos Lima', email: 'carlos@email.com' }
    ];
    
    return new Promise(resolve => {
      setTimeout(() => {
        if (!term) {
          resolve([]);
        } else {
          const filtered = mockUsers.filter(user => 
            user.name.toLowerCase().includes(term.toLowerCase()) ||
            user.email.toLowerCase().includes(term.toLowerCase())
          );
          resolve(filtered);
        }
      }, 500);
    });
  }
  
  ngOnDestroy() {
    // ============================================================
    // 🔴 Cleanup do Subject 🔴
    // ============================================================
    this.search$.complete();
  }
}
