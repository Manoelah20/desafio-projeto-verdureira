import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, fromEvent, interval, of, combineLatest, forkJoin, merge, Subject } from 'rxjs';
import {
  map,
  filter,
  take,
  takeUntil,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  mergeMap,
  catchError,
  tap,
  retry,
  delay,
  throttleTime,
  scan,
  reduce,
  startWith,
  endWith
} from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  template: `
    <div class="operators-demo">
      <h2>Exercício 2.4: Operadores RxJS</h2>
      
      <div class="demo-section">
        <h3>🔧 Operadores de Transformação</h3>
        
        <!-- Map -->
        <div class="operator-demo">
          <h4>1. map - Transforma cada valor</h4>
          <div class="controls">
            <button (click)="runMapDemo()">Executar map()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ mapLog }}</div>
          </div>
        </div>
        
        <!-- Filter -->
        <div class="operator-demo">
          <h4>2. filter - Filtra valores</h4>
          <div class="controls">
            <button (click)="runFilterDemo()">Executar filter()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ filterLog }}</div>
          </div>
        </div>
        
        <!-- Scan -->
        <div class="operator-demo">
          <h4>3. scan - Acumula valores (como reduce)</h4>
          <div class="controls">
            <button (click)="runScanDemo()">Executar scan()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ scanLog }}</div>
          </div>
        </div>
        
        <h3>⏱️ Operadores de Tempo</h3>
        
        <!-- Debounce -->
        <div class="operator-demo">
          <h4>4. debounceTime - Aguarda após última emissão</h4>
          <div class="controls">
            <button (click)="runDebounceDemo()">Executar debounceTime()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ debounceLog }}</div>
          </div>
        </div>
        
        <!-- Delay -->
        <div class="operator-demo">
          <h4>5. delay - Atrasa emissões</h4>
          <div class="controls">
            <button (click)="runDelayDemo()">Executar delay()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ delayLog }}</div>
          </div>
        </div>
        
        <!-- Throttle -->
        <div class="operator-demo">
          <h4>6. throttleTime - Limita frequência de emissões</h4>
          <div class="controls">
            <button (click)="runThrottleDemo()">Executar throttleTime()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ throttleLog }}</div>
          </div>
        </div>
        
        <h3>🔀 Operadores de Combinação</h3>
        
        <!-- MergeMap -->
        <div class="operator-demo">
          <h4>7. mergeMap - Executa observáveis em paralelo</h4>
          <div class="controls">
            <button (click)="runMergeMapDemo()">Executar mergeMap()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ mergeMapLog }}</div>
          </div>
        </div>
        
        <!-- SwitchMap -->
        <div class="operator-demo">
          <h4>8. switchMap - Cancela anteriores, mantém última</h4>
          <div class="controls">
            <button (click)="runSwitchMapDemo()">Executar switchMap()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ switchMapLog }}</div>
          </div>
        </div>
        
        <!-- CombineLatest -->
        <div class="operator-demo">
          <h4>9. combineLatest - Combina últimos valores de múltiplos observáveis</h4>
          <div class="controls">
            <button (click)="runCombineLatestDemo()">Executar combineLatest()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ combineLatestLog }}</div>
          </div>
        </div>
        
        <!-- ForkJoin -->
        <div class="operator-demo">
          <h4>10. forkJoin - Executa todos e emite quando todos completam</h4>
          <div class="controls">
            <button (click)="runForkJoinDemo()">Executar forkJoin()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ forkJoinLog }}</div>
          </div>
        </div>
        
        <h3>🛡️ Operadores de Utilidade</h3>
        
        <!-- Tap -->
        <div class="operator-demo">
          <h4>11. tap - Executa efeitos colaterais</h4>
          <div class="controls">
            <button (click)="runTapDemo()">Executar tap()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ tapLog }}</div>
          </div>
        </div>
        
        <!-- CatchError -->
        <div class="operator-demo">
          <h4>12. catchError - Trata erros</h4>
          <div class="controls">
            <button (click)="runCatchErrorDemo()">Executar catchError()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ catchErrorLog }}</div>
          </div>
        </div>
        
        <!-- Retry -->
        <div class="operator-demo">
          <h4>13. retry - Tenta novamente em caso de erro</h4>
          <div class="controls">
            <button (click)="runRetryDemo()">Executar retry()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ retryLog }}</div>
          </div>
        </div>
        
        <!-- Take -->
        <div class="operator-demo">
          <h4>14. take - Pega apenas N valores</h4>
          <div class="controls">
            <button (click)="runTakeDemo()">Executar take()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ takeLog }}</div>
          </div>
        </div>
        
        <!-- DistinctUntilChanged -->
        <div class="operator-demo">
          <h4>15. distinctUntilChanged - Ignora valores duplicados consecutivos</h4>
          <div class="controls">
            <button (click)="runDistinctUntilChangedDemo()">Executar distinctUntilChanged()</button>
          </div>
          <div class="output">
            <strong>Output:</strong>
            <div class="log">{{ distinctLog }}</div>
          </div>
        </div>
        
        <div class="info-box">
          <h4>📝 Resumo dos Operadores:</h4>
          <table class="operators-table">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Operador</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Transformação</td><td>map</td><td>Transforma cada valor emitido</td></tr>
              <tr><td>Transformação</td><td>filter</td><td>Filtra valores baseado em condição</td></tr>
              <tr><td>Transformação</td><td>scan</td><td>Acumula valores (como reduce)</td></tr>
              <tr><td>Tempo</td><td>debounceTime</td><td>Aguarda após última emissão</td></tr>
              <tr><td>Tempo</td><td>delay</td><td>Atrasa emissões</td></tr>
              <tr><td>Tempo</td><td>throttleTime</td><td>Limita frequência de emissões</td></tr>
              <tr><td>Combinação</td><td>mergeMap</td><td>Executa observáveis em paralelo</td></tr>
              <tr><td>Combinação</td><td>switchMap</td><td>Cancela anteriores, mantém última</td></tr>
              <tr><td>Combinação</td><td>combineLatest</td><td>Combina últimos valores</td></tr>
              <tr><td>Combinação</td><td>forkJoin</td><td>Executa todos e emite ao completar</td></tr>
              <tr><td>Utilidade</td><td>tap</td><td>Executa efeitos colaterais</td></tr>
              <tr><td>Utilidade</td><td>catchError</td><td>Trata erros</td></tr>
              <tr><td>Utilidade</td><td>retry</td><td>Tenta novamente em erro</td></tr>
              <tr><td>Utilidade</td><td>take</td><td>Pega apenas N valores</td></tr>
              <tr><td>Utilidade</td><td>distinctUntilChanged</td><td>Ignora duplicatas consecutivas</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .operators-demo {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    .demo-section {
      border: 2px solid #FF5722;
      border-radius: 8px;
      padding: 20px;
      margin-top: 20px;
    }
    .operator-demo {
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      padding: 15px;
      margin: 20px 0;
    }
    .operator-demo h4 {
      color: #FF5722;
      margin-top: 0;
    }
    .controls {
      display: flex;
      gap: 10px;
      margin: 15px 0;
    }
    button {
      padding: 8px 16px;
      background-color: #FF5722;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #E64A19;
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
    .info-box {
      background-color: #fff3e0;
      border-left: 4px solid #FF5722;
      padding: 15px;
      margin: 20px 0;
    }
    .operators-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    .operators-table th,
    .operators-table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    .operators-table th {
      background-color: #FF5722;
      color: white;
    }
    .operators-table tr:nth-child(even) {
      background-color: #f9f9f9;
    }
  `]
})
export class OperatorsComponent implements OnInit, OnDestroy {
  // Logs for each operator demo
  mapLog = '';
  filterLog = '';
  scanLog = '';
  debounceLog = '';
  delayLog = '';
  throttleLog = '';
  mergeMapLog = '';
  switchMapLog = '';
  combineLatestLog = '';
  forkJoinLog = '';
  tapLog = '';
  catchErrorLog = '';
  retryLog = '';
  takeLog = '';
  distinctLog = '';

  private destroy$ = new Subject<void>();

  ngOnInit() { }

  // ==================== TRANSFORMATION OPERATORS ====================
  runMapDemo() {
    this.mapLog = '';
    of(1, 2, 3, 4, 5).pipe(
      map(x => x * 2),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => this.appendLog(this.mapLog, `Original: ${value / 2} -> Mapped: ${value}`),
      complete: () => this.appendLog(this.mapLog, 'Completed')
    });
  }

  runFilterDemo() {
    this.filterLog = '';
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      filter(x => x % 2 === 0),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => this.appendLog(this.filterLog, `Even number: ${value}`),
      complete: () => this.appendLog(this.filterLog, 'Completed')
    });
  }

  runScanDemo() {
    this.scanLog = '';
    of(1, 2, 3, 4, 5).pipe(
      scan((acc, curr) => acc + curr, 0),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => this.appendLog(this.scanLog, `Accumulated sum: ${value}`),
      complete: () => this.appendLog(this.scanLog, 'Completed')
    });
  }

  // ==================== TIME OPERATORS ====================
  runDebounceDemo() {
    this.debounceLog = '';
    this.appendLog(this.debounceLog, 'Starting debounce demo...');

    of(1, 2, 3, 4, 5).pipe(
      debounceTime(300),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => this.appendLog(this.debounceLog, `Debounced value: ${value}`),
      complete: () => this.appendLog(this.debounceLog, 'Completed')
    });
  }

  runDelayDemo() {
    this.delayLog = '';
    this.appendLog(this.delayLog, 'Starting delay demo...');

    of('Hello', 'World').pipe(
      delay(1000),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => this.appendLog(this.delayLog, `Delayed value: ${value}`),
      complete: () => this.appendLog(this.delayLog, 'Completed')
    });
  }

  runThrottleDemo() {
    this.throttleLog = '';
    this.appendLog(this.throttleLog, 'Starting throttle demo...');

    interval(100).pipe(
      throttleTime(500),
      take(5),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => this.appendLog(this.throttleLog, `Throttled value: ${value}`),
      complete: () => this.appendLog(this.throttleLog, 'Completed')
    });
  }

  // ==================== COMBINATION OPERATORS ====================
  runMergeMapDemo() {
    this.mergeMapLog = '';
    this.appendLog(this.mergeMapLog, 'Starting mergeMap demo (parallel execution)...');

    of(1, 2, 3).pipe(
      mergeMap(x => of(`Result ${x}A`, `Result ${x}B`).pipe(delay(500))),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => this.appendLog(this.mergeMapLog, `Merged: ${value}`),
      complete: () => this.appendLog(this.mergeMapLog, 'Completed')
    });
  }

  runSwitchMapDemo() {
    this.switchMapLog = '';
    this.appendLog(this.switchMapLog, 'Starting switchMap demo (cancels previous)...');

    of(1, 2, 3).pipe(
      switchMap(x => of(`Result ${x}`).pipe(delay(500))),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => this.appendLog(this.switchMapLog, `Switched: ${value}`),
      complete: () => this.appendLog(this.switchMapLog, 'Completed')
    });
  }

  runCombineLatestDemo() {
    this.combineLatestLog = '';
    this.appendLog(this.combineLatestLog, 'Starting combineLatest demo...');

    const obs1 = interval(500).pipe(take(3), map(x => `A${x}`));
    const obs2 = interval(700).pipe(take(3), map(x => `B${x}`));

    combineLatest([obs1, obs2]).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: ([val1, val2]) => this.appendLog(this.combineLatestLog, `Combined: ${val1} + ${val2}`),
      complete: () => this.appendLog(this.combineLatestLog, 'Completed')
    });
  }

  runForkJoinDemo() {
    this.forkJoinLog = '';
    this.appendLog(this.forkJoinLog, 'Starting forkJoin demo (waits for all)...');

    const obs1 = of('A').pipe(delay(500));
    const obs2 = of('B').pipe(delay(700));
    const obs3 = of('C').pipe(delay(300));

    forkJoin([obs1, obs2, obs3]).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: ([val1, val2, val3]) => this.appendLog(this.forkJoinLog, `All completed: ${val1}, ${val2}, ${val3}`),
      complete: () => this.appendLog(this.forkJoinLog, 'Completed')
    });
  }

  // ==================== UTILITY OPERATORS ====================
  runTapDemo() {
    this.tapLog = '';
    this.appendLog(this.tapLog, 'Starting tap demo...');

    of(1, 2, 3).pipe(
      tap(x => this.appendLog(this.tapLog, `Tap side effect: ${x}`)),
      map(x => x * 2),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => this.appendLog(this.tapLog, `Final value: ${value}`),
      complete: () => this.appendLog(this.tapLog, 'Completed')
    });
  }

  runCatchErrorDemo() {
    this.catchErrorLog = '';
    this.appendLog(this.catchErrorLog, 'Starting catchError demo...');

    of(1, 2, 3).pipe(
      map(x => {
        if (x === 2) throw new Error('Error on value 2');
        return x;
      }),
      catchError(err => {
        this.appendLog(this.catchErrorLog, `Caught error: ${err.message}`);
        return of('recovered');
      }),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => this.appendLog(this.catchErrorLog, `Value: ${value}`),
      complete: () => this.appendLog(this.catchErrorLog, 'Completed')
    });
  }

  runRetryDemo() {
    this.retryLog = '';
    this.appendLog(this.retryLog, 'Starting retry demo...');

    let attempt = 0;
    of('data').pipe(
      map(() => {
        attempt++;
        if (attempt < 3) throw new Error('Temporary error');
        return 'success';
      }),
      retry(2),
      catchError(err => of('failed after retries')),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => this.appendLog(this.retryLog, `Result: ${value}`),
      complete: () => this.appendLog(this.retryLog, 'Completed')
    });
  }

  runTakeDemo() {
    this.takeLog = '';
    this.appendLog(this.takeLog, 'Starting take demo...');

    interval(100).pipe(
      take(5),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => this.appendLog(this.takeLog, `Value: ${value}`),
      complete: () => this.appendLog(this.takeLog, 'Completed')
    });
  }

  runDistinctUntilChangedDemo() {
    this.distinctLog = '';
    this.appendLog(this.distinctLog, 'Starting distinctUntilChanged demo...');

    of(1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4).pipe(
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (value) => this.appendLog(this.distinctLog, `Distinct: ${value}`),
      complete: () => this.appendLog(this.distinctLog, 'Completed')
    });
  }

  // ==================== HELPER METHODS ====================
  private appendLog(log: string, message: string): string {
    const timestamp = new Date().toLocaleTimeString();
    return log + `[${timestamp}] ${message}\n`;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
