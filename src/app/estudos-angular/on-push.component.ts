import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push',
  template: `
    <div class="on-push-demo">
      <h2>Exercício 2.1: OnPush Change Detection</h2>
      
      <div class="demo-section">
        <h3>Contador com OnPush</h3>
        <p>Valor do contador: <strong>{{ counter }}</strong></p>
        
        <button (click)="incrementCounter()">Incrementar</button>
        <button (click)="forceDetection()">Forçar DetectChanges</button>
        <button (click)="markForCheck()">Mark for Check</button>
        
        <div class="info-box">
          <h4>🔍 ChangeDetectorRef em destaque:</h4>
          <pre>{{ changeDetectorInfo }}</pre>
        </div>
        
        <div class="explanation">
          <h4>Como funciona:</h4>
          <ul>
            <li>O componente usa <code>ChangeDetectionStrategy.OnPush</code></li>
            <li>Só detecta mudanças quando:
              <ul>
                <li>Referência de @Input muda</li>
                <li>Evento do componente é disparado</li>
                <li>Async pipe em Observable emite valor</li>
                <li><strong>ChangeDetectorRef.detectChanges()</strong> é chamado explicitamente</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .on-push-demo {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    .demo-section {
      border: 2px solid #4CAF50;
      border-radius: 8px;
      padding: 20px;
      margin-top: 20px;
    }
    button {
      margin: 5px;
      padding: 8px 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
    .info-box {
      background-color: #f0f8ff;
      border-left: 4px solid #2196F3;
      padding: 15px;
      margin: 20px 0;
    }
    .info-box pre {
      background-color: #e8e8e8;
      padding: 10px;
      border-radius: 4px;
      overflow-x: auto;
    }
    .explanation {
      background-color: #fff3cd;
      border-left: 4px solid #ffc107;
      padding: 15px;
      margin-top: 20px;
    }
    .explanation ul {
      margin-left: 20px;
    }
    code {
      background-color: #e8e8e8;
      padding: 2px 6px;
      border-radius: 3px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent implements OnInit {
  counter = 0;
  
  // ============================================================
  // 🔴🔴🔴 ChangeDetectorRef - BEM VISÍVEL 🔴🔴🔴
  // ============================================================
  // Este é o ponto chave do exercício 2.1!
  // O ChangeDetectorRef permite controlar manualmente quando
  // o Angular deve verificar se houve mudanças no componente.
  // ============================================================
  constructor(
    // 👇👇👇 INJEÇÃO DO ChangeDetectorRef 👇👇👇
    private cdr: ChangeDetectorRef
  ) {}
  
  ngOnInit() {
    this.updateChangeDetectorInfo();
  }
  
  incrementCounter() {
    this.counter++;
    // ❌ Com OnPush, isso NÃO atualiza a view automaticamente!
    // Precisamos usar o ChangeDetectorRef para forçar a atualização
  }
  
  // ✅ Método 1: Força a detecção de mudanças imediatamente
  forceDetection() {
    this.counter++;
    // ============================================================
    // 🔴 detectChanges() 🔴
    // Força a detecção de mudanças neste componente e seus filhos
    // ============================================================
    this.cdr.detectChanges();
    this.updateChangeDetectorInfo();
  }
  
  // ✅ Método 2: Marca o componente para verificação no próximo ciclo
  markForCheck() {
    this.counter++;
    // ============================================================
    // 🔴 markForCheck() 🔴
    // Marca o componente para ser verificado no próximo ciclo de change detection
    // Útil quando a mudança acontece assincronamente (ex: setTimeout, Promise)
    // ============================================================
    this.cdr.markForCheck();
    this.updateChangeDetectorInfo();
  }
  
  // ✅ Método 3: Desliga a detecção de mudanças (para otimização)
  detach() {
    // ============================================================
    // 🔴 detach() 🔴
    // Desliga a detecção de mudanças para este componente
    // O componente não será mais verificado automaticamente
    // ============================================================
    this.cdr.detach();
    this.updateChangeDetectorInfo();
  }
  
  // ✅ Método 4: Reativa a detecção de mudanças
  reattach() {
    // ============================================================
    // 🔴 reattach() 🔴
    // Reativa a detecção de mudanças para este componente
    // ============================================================
    this.cdr.reattach();
    this.updateChangeDetectorInfo();
  }
  
  changeDetectorInfo = '';
  
  private updateChangeDetectorInfo() {
    this.changeDetectorInfo = `
ChangeDetectorRef Methods Available:
  ✅ detectChanges() - Força verificação imediata
  ✅ markForCheck() - Marca para próximo ciclo
  ✅ detach() - Desliga detecção automática
  ✅ reattach() - Reativa detecção automática

Current Strategy: OnPush
Counter Value: ${this.counter}
    `.trim();
  }
}
