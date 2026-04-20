import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-subject-behavior-subject',
  template: `
    <div class="subject-demo">
      <h2>Exercício 2.3: Subject e BehaviorSubject</h2>
      
      <div class="demo-section">
        <h3>🔄 Tipos de Subject</h3>
        
        <!-- Subject Section -->
        <div class="subject-type">
          <h4>1. Subject (Multicast)</h4>
          <p>Emite apenas para subscribers que estão inscritos no momento da emissão</p>
          
          <div class="controls">
            <button (click)="subjectNext()">Emitir valor Subject</button>
            <button (click)="subscribeSubject()">Subscribe Subject</button>
            <button (click)="unsubscribeSubject()">Unsubscribe Subject</button>
          </div>
          
          <div class="output">
            <strong>Subject Output:</strong>
            <div class="log">{{ subjectLog }}</div>
          </div>
        </div>
        
        <!-- BehaviorSubject Section -->
        <div class="subject-type">
          <h4>2. BehaviorSubject (Estado atual)</h4>
          <p>Retém o último valor e o emite para novos subscribers imediatamente</p>
          
          <div class="controls">
            <input type="number" [(ngModel)]="behaviorValue" placeholder="Valor" />
            <button (click)="behaviorSubjectNext()">Emitir valor BehaviorSubject</button>
            <button (click)="subscribeBehaviorSubject()">Subscribe BehaviorSubject</button>
            <button (click)="unsubscribeBehaviorSubject()">Unsubscribe BehaviorSubject</button>
          </div>
          
          <div class="output">
            <strong>BehaviorSubject Output:</strong>
            <div class="log">{{ behaviorLog }}</div>
            <div class="current-value">
              <strong>Valor atual:</strong> {{ behaviorCurrentValue }}
            </div>
          </div>
        </div>
        
        <!-- ReplaySubject Section -->
        <div class="subject-type">
          <h4>3. ReplaySubject (Histórico)</h4>
          <p>Repete os últimos N valores para novos subscribers</p>
          
          <div class="controls">
            <button (click)="replaySubjectNext()">Emitir valor ReplaySubject</button>
            <button (click)="subscribeReplaySubject()">Subscribe ReplaySubject</button>
          </div>
          
          <div class="output">
            <strong>ReplaySubject Output:</strong>
            <div class="log">{{ replayLog }}</div>
          </div>
        </div>
        
        <!-- AsyncSubject Section -->
        <div class="subject-type">
          <h4>4. AsyncSubject (Último valor)</h4>
          <p>Emite apenas o último valor quando o Subject completa</p>
          
          <div class="controls">
            <button (click)="asyncSubjectNext()">Emitir valor AsyncSubject</button>
            <button (click)="asyncSubjectComplete()">Completar AsyncSubject</button>
            <button (click)="subscribeAsyncSubject()">Subscribe AsyncSubject</button>
          </div>
          
          <div class="output">
            <strong>AsyncSubject Output:</strong>
            <div class="log">{{ asyncLog }}</div>
          </div>
        </div>
        
        <div class="info-box">
          <h4>📝 Comparação dos Subjects:</h4>
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Valor inicial</th>
                <th>Emite para novos subscribers</th>
                <th>Uso típico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Subject</strong></td>
                <td>Não</td>
                <td>Não (apenas novos)</td>
                <td>Eventos simples</td>
              </tr>
              <tr>
                <td><strong>BehaviorSubject</strong></td>
                <td>Sim (obrigatório)</td>
                <td>Sim (último valor)</td>
                <td>Estado atual</td>
              </tr>
              <tr>
                <td><strong>ReplaySubject</strong></td>
                <td>Opcional</td>
                <td>Sim (N últimos)</td>
                <td>Histórico/cache</td>
              </tr>
              <tr>
                <td><strong>AsyncSubject</strong></td>
                <td>Não</td>
                <td>Sim (após complete)</td>
                <td>Resultado final</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="code-example">
          <h4>💻 Exemplos de código:</h4>
          <pre><code>// Subject - Multicast simples
const subject = new Subject&lt;string&gt;();
subject.subscribe(val => console.log('Subscriber 1:', val));
subject.next('Hello'); // Subscriber 1 recebe
subject.subscribe(val => console.log('Subscriber 2:', val));
subject.next('World'); // Ambos recebem

// BehaviorSubject - Estado atual
const behavior = new BehaviorSubject&lt;string&gt;('initial');
behavior.subscribe(val => console.log('New:', val)); // Imprime 'initial' imediatamente
behavior.next('updated'); // Todos recebem 'updated'

// ReplaySubject - Histórico
const replay = new ReplaySubject&lt;string&gt;(2); // Guarda últimos 2 valores
replay.next('A');
replay.next('B');
replay.next('C');
replay.subscribe(val => console.log(val)); // Imprime 'B' e 'C'</code></pre>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .subject-demo {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    .demo-section {
      border: 2px solid #9C27B0;
      border-radius: 8px;
      padding: 20px;
      margin-top: 20px;
    }
    .subject-type {
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      padding: 15px;
      margin: 20px 0;
    }
    .subject-type h4 {
      color: #9C27B0;
      margin-top: 0;
    }
    .controls {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin: 15px 0;
    }
    .controls input {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 100px;
    }
    button {
      padding: 8px 16px;
      background-color: #9C27B0;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #7B1FA2;
    }
    .output {
      background-color: #f5f5f5;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 10px;
      margin-top: 10px;
    }
    .log {
      background-color: #2d2d2d;
      color: #f8f8f2;
      padding: 10px;
      border-radius: 4px;
      max-height: 150px;
      overflow-y: auto;
      font-family: 'Courier New', monospace;
      font-size: 12px;
      white-space: pre-wrap;
    }
    .current-value {
      margin-top: 10px;
      padding: 8px;
      background-color: #e8f5e9;
      border-radius: 4px;
    }
    .info-box {
      background-color: #f3e5f5;
      border-left: 4px solid #9C27B0;
      padding: 15px;
      margin: 20px 0;
    }
    .comparison-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    .comparison-table th,
    .comparison-table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    .comparison-table th {
      background-color: #9C27B0;
      color: white;
    }
    .comparison-table tr:nth-child(even) {
      background-color: #f9f9f9;
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
  `]
})
export class SubjectBehaviorSubjectComponent implements OnInit, OnDestroy {
  // ============================================================
  // 🔴 SUBJECT 🔴
  // ============================================================
  // Multicast: emite para todos os subscribers ativos
  // Não emite para subscribers que se inscreveram após a emissão
  // ============================================================
  private subject = new Subject<string>();
  private subjectSubscription: any = null;
  subjectLog = '';
  private subjectCounter = 0;
  
  // ============================================================
  // 🔴 BEHAVIOR SUBJECT 🔴
  // ============================================================
  // Sempre emite o último valor para novos subscribers
  // Requer um valor inicial
  // ============================================================
  private behaviorSubject = new BehaviorSubject<string>('valor inicial');
  private behaviorSubscription: any = null;
  behaviorLog = '';
  behaviorValue = 'valor inicial';
  behaviorCurrentValue = 'valor inicial';
  
  // ============================================================
  // 🔴 REPLAY SUBJECT 🔴
  // ============================================================
  // Replay os últimos N valores para novos subscribers
  // ============================================================
  private replaySubject = new ReplaySubject<string>(3); // Guarda últimos 3 valores
  private replaySubscription: any = null;
  replayLog = '';
  private replayCounter = 0;
  
  // ============================================================
  // 🔴 ASYNC SUBJECT 🔴
  // ============================================================
  // Emite apenas o último valor quando o Subject completa
  // ============================================================
  private asyncSubject = new AsyncSubject<string>();
  private asyncSubscription: any = null;
  asyncLog = '';
  private asyncCounter = 0;
  
  private destroy$ = new Subject<void>();
  
  ngOnInit() {
    // Setup initial subscriptions for demo
    this.subscribeSubject();
    this.subscribeBehaviorSubject();
  }
  
  // ==================== SUBJECT METHODS ====================
  subjectNext() {
    const value = `Valor ${++this.subjectCounter}`;
    this.subject.next(value);
    this.appendLog(this.subjectLog, `Emitted: ${value}`);
  }
  
  subscribeSubject() {
    if (this.subjectSubscription) {
      this.appendLog(this.subjectLog, 'Already subscribed');
      return;
    }
    
    this.subjectSubscription = this.subject
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (value) => this.appendLog(this.subjectLog, `Received: ${value}`),
        complete: () => this.appendLog(this.subjectLog, 'Completed')
      });
    
    this.appendLog(this.subjectLog, 'Subscribed');
  }
  
  unsubscribeSubject() {
    if (this.subjectSubscription) {
      this.subjectSubscription.unsubscribe();
      this.subjectSubscription = null;
      this.appendLog(this.subjectLog, 'Unsubscribed');
    }
  }
  
  // ==================== BEHAVIOR SUBJECT METHODS ====================
  behaviorSubjectNext() {
    this.behaviorSubject.next(this.behaviorValue);
    this.behaviorCurrentValue = this.behaviorValue;
    this.appendLog(this.behaviorLog, `Emitted: ${this.behaviorValue}`);
  }
  
  subscribeBehaviorSubject() {
    if (this.behaviorSubscription) {
      this.appendLog(this.behaviorLog, 'Already subscribed');
      return;
    }
    
    this.behaviorSubscription = this.behaviorSubject
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (value) => this.appendLog(this.behaviorLog, `Received: ${value}`),
        complete: () => this.appendLog(this.behaviorLog, 'Completed')
      });
    
    this.appendLog(this.behaviorLog, 'Subscribed (received initial value immediately)');
  }
  
  unsubscribeBehaviorSubject() {
    if (this.behaviorSubscription) {
      this.behaviorSubscription.unsubscribe();
      this.behaviorSubscription = null;
      this.appendLog(this.behaviorLog, 'Unsubscribed');
    }
  }
  
  // ==================== REPLAY SUBJECT METHODS ====================
  replaySubjectNext() {
    const value = `Replay ${++this.replayCounter}`;
    this.replaySubject.next(value);
    this.appendLog(this.replayLog, `Emitted: ${value}`);
  }
  
  subscribeReplaySubject() {
    if (this.replaySubscription) {
      this.appendLog(this.replayLog, 'Already subscribed');
      return;
    }
    
    this.replaySubscription = this.replaySubject
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (value) => this.appendLog(this.replayLog, `Received: ${value}`),
        complete: () => this.appendLog(this.replayLog, 'Completed')
      });
    
    this.appendLog(this.replayLog, 'Subscribed (received buffered values)');
  }
  
  // ==================== ASYNC SUBJECT METHODS ====================
  asyncSubjectNext() {
    const value = `Async ${++this.asyncCounter}`;
    this.asyncSubject.next(value);
    this.appendLog(this.asyncLog, `Emitted: ${value} (not emitted yet, waiting for complete)`);
  }
  
  asyncSubjectComplete() {
    this.asyncSubject.complete();
    this.appendLog(this.asyncLog, 'Completed (last value emitted now)');
  }
  
  subscribeAsyncSubject() {
    if (this.asyncSubscription) {
      this.appendLog(this.asyncLog, 'Already subscribed');
      return;
    }
    
    this.asyncSubscription = this.asyncSubject
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (value) => this.appendLog(this.asyncLog, `Received: ${value}`),
        complete: () => this.appendLog(this.asyncLog, 'Completed')
      });
    
    this.appendLog(this.asyncLog, 'Subscribed (waiting for complete)');
  }
  
  // ==================== HELPER METHODS ====================
  private appendLog(log: string, message: string): string {
    const timestamp = new Date().toLocaleTimeString();
    return log + `[${timestamp}] ${message}\n`;
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    
    if (this.subjectSubscription) this.subjectSubscription.unsubscribe();
    if (this.behaviorSubscription) this.behaviorSubscription.unsubscribe();
    if (this.replaySubscription) this.replaySubscription.unsubscribe();
    if (this.asyncSubscription) this.asyncSubscription.unsubscribe();
    
    this.subject.complete();
    this.behaviorSubject.complete();
    this.replaySubject.complete();
    this.asyncSubject.complete();
  }
}
