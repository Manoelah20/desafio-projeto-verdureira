import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Exercicio1Component } from './exercicios/exercicio-1/exercicio-1.component';
import { Exercicio2Component } from './exercicios/exercicio-2/exercicio-2.component';
import { Exercicio3Component } from './exercicios/exercicio-3/exercicio-3';
import { Exercicio4Component } from './exercicios/exercicio-4/exercicio-4';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    Exercicio1Component,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component
  ],
  template: `
    <mat-toolbar color="primary">
      <span class="toolbar-title">Desafio Angular - Projeto Verdureira</span>
      <span class="toolbar-author">Manoela Harrison - Teste Técnico</span>
    </mat-toolbar>
    
    <div class="container">
      <mat-card class="intro-card">
        <mat-card-header>
          <mat-card-title>Avaliação Técnica</mat-card-title>
          <mat-card-subtitle>Angular 17+, RxJS, NgRx/Signals, Angular Material, TypeScript</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Este projeto demonstra conhecimentos práticos em:</p>
          <ul>
            <li>Angular 17+ (Standalone Components, Signals)</li>
            <li>RxJS (Operadores, Subjects, Observables)</li>
            <li>NgRx (Store, Effects, Actions, Reducers)</li>
            <li>Angular Material (Componentes UI)</li>
            <li>TypeScript (Generics, Interfaces, Tipagem)</li>
            <li>Testes Unitários (Vitest)</li>
          </ul>
          <p class="note">Clique em "Ver Código" para ver o código-fonte de cada exercício.</p>
        </mat-card-content>
      </mat-card>

      <div class="exercises-grid">
        <mat-card class="exercise-card">
          <mat-card-header>
            <mat-card-title>Exercício 1 - TypeScript</mat-card-title>
            <mat-card-subtitle>Refatoração e Generics</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Refatoração de código com classes e implementação de função de paginação genérica.</p>
            <button mat-raised-button color="accent" (click)="showCode1 = !showCode1" class="code-toggle">
              {{ showCode1 ? 'Ocultar Código' : 'Ver Código' }}
            </button>
            <div class="code-section" *ngIf="showCode1">
              <h4>Arquivos Principais:</h4>
              <ul class="file-list">
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-1/exercicio-1.component.ts" target="_blank">exercicio-1.component.ts</a></li>
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-1/exercicio-1.logic.ts" target="_blank">exercicio-1.logic.ts</a></li>
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-1/exercicio-1.component.html" target="_blank">exercicio-1.component.html</a></li>
              </ul>
            </div>
            <div class="demo-section" *ngIf="!showCode1">
              <app-exercicio-1></app-exercicio-1>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="exercise-card">
          <mat-card-header>
            <mat-card-title>Exercício 2 - Angular & RxJS</mat-card-title>
            <mat-card-subtitle>Change Detection e Operadores RxJS</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Demonstração de OnPush, switchMap, debounceTime e trackBy para performance.</p>
            <button mat-raised-button color="accent" (click)="showCode2 = !showCode2" class="code-toggle">
              {{ showCode2 ? 'Ocultar Código' : 'Ver Código' }}
            </button>
            <div class="code-section" *ngIf="showCode2">
              <h4>Arquivos Principais:</h4>
              <ul class="file-list">
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/tree/master/src/app/exercicios/exercicio-2" target="_blank">exercicio-2/ (todos os sub-exercícios)</a></li>
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-2/detect-onpush/detect-onpush.ts" target="_blank">detect-onpush.ts (Change Detection)</a></li>
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-2/busca-debounce/busca-debounce.ts" target="_blank">busca-debounce.ts (Debounce)</a></li>
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-2/rxjs-switchmap/rxjs-switchmap.ts" target="_blank">rxjs-switchmap.ts (SwitchMap)</a></li>
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-2/performance-lista/performance-lista.ts" target="_blank">performance-lista.ts (TrackBy)</a></li>
              </ul>
            </div>
            <div class="demo-section" *ngIf="!showCode2">
              <app-exercicio-2></app-exercicio-2>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="exercise-card">
          <mat-card-header>
            <mat-card-title>Exercício 3 - Signals & NgRx</mat-card-title>
            <mat-card-subtitle>Signals e Gerenciamento de Estado</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Signals para carrinho e NgRx para lista de tarefas com Effects.</p>
            <button mat-raised-button color="accent" (click)="showCode3 = !showCode3" class="code-toggle">
              {{ showCode3 ? 'Ocultar Código' : 'Ver Código' }}
            </button>
            <div class="code-section" *ngIf="showCode3">
              <h4>Arquivos Principais:</h4>
              <ul class="file-list">
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-3/exercicio-3.ts" target="_blank">exercicio-3.ts (Componente Principal)</a></li>
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-3/exercicio-3.logic.ts" target="_blank">exercicio-3.logic.ts (NgRx Store)</a></li>
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-3/exercicio-3.html" target="_blank">exercicio-3.html (Template)</a></li>
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/app.config.ts" target="_blank">app.config.ts (Configuração NgRx)</a></li>
              </ul>
            </div>
            <div class="demo-section" *ngIf="!showCode3">
              <app-exercicio-3></app-exercicio-3>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="exercise-card">
          <mat-card-header>
            <mat-card-title>Exercício 4 - Store com Signals</mat-card-title>
            <mat-card-subtitle>Store Personalizada e Busca</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Store com Signals, debounce na busca e integração com API mock.</p>
            <button mat-raised-button color="accent" (click)="showCode4 = !showCode4" class="code-toggle">
              {{ showCode4 ? 'Ocultar Código' : 'Ver Código' }}
            </button>
            <div class="code-section" *ngIf="showCode4">
              <h4>Arquivos Principais:</h4>
              <ul class="file-list">
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-4/exercicio-4.ts" target="_blank">exercicio-4.ts (Componente)</a></li>
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-4/exercicio-4.logic.ts" target="_blank">exercicio-4.logic.ts (Store com Signals)</a></li>
                <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-4/exercicio-4.html" target="_blank">exercicio-4.html (Template)</a></li>
              </ul>
            </div>
            <div class="demo-section" *ngIf="!showCode4">
              <app-exercicio-4></app-exercicio-4>
            </div>
          </mat-card-content>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    mat-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
    }

    .toolbar-title {
      font-size: 18px;
      font-weight: 600;
    }

    .toolbar-author {
      font-size: 14px;
      font-weight: 500;
      opacity: 0.9;
    }

    .container {
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 30px;
    }

    .intro-card {
      margin-bottom: 40px;
      border-radius: 16px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .exercises-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    @media (max-width: 768px) {
      .exercises-grid {
        grid-template-columns: 1fr;
      }
    }

    .note {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      border-radius: 12px;
      margin-top: 25px;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.6;
    }

    .exercises-nav {
      display: flex;
      gap: 20px;
      margin-bottom: 40px;
      flex-wrap: wrap;
    }

    .exercises-nav button {
      flex: 1;
      min-width: 220px;
      border-radius: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
      padding: 12px 24px;
      font-size: 15px;
    }

    .exercises-nav button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .exercise-card {
      margin-bottom: 40px;
      border-radius: 16px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease;
    }

    .exercise-card:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }

    .code-toggle {
      margin-bottom: 25px;
      border-radius: 12px;
      font-weight: 600;
      padding: 10px 20px;
      font-size: 15px;
    }

    .code-section {
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      padding: 30px;
      border-radius: 16px;
      margin-top: 25px;
      border-left: 4px solid #667eea;
    }

    .code-section h4 {
      margin-top: 0;
      color: #667eea;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .file-list {
      list-style: none;
      padding: 0;
      margin: 20px 0;
    }

    .file-list li {
      margin: 15px 0;
      padding: 15px;
      background: white;
      border-radius: 10px;
      transition: all 0.2s ease;
    }

    .file-list li:hover {
      background: #e8eaf6;
      transform: translateX(5px);
    }

    .file-list a {
      color: #667eea;
      text-decoration: none;
      font-weight: 500;
      display: flex;
      align-items: center;
      font-size: 15px;
    }

    .file-list a::before {
      content: '📄';
      margin-right: 12px;
      font-size: 18px;
    }

    .file-list a:hover {
      color: #764ba2;
    }

    .demo-section {
      margin-top: 25px;
      padding: 30px;
      background: white;
      border-radius: 12px;
      border: 1px solid #e0e0e0;
    }

    ::ng-deep mat-card-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 16px 16px 0 0;
      padding: 25px 30px;
    }

    ::ng-deep mat-card-title {
      color: white;
      font-size: 22px;
      font-weight: 600;
    }

    ::ng-deep mat-card-subtitle {
      color: rgba(255, 255, 255, 0.9);
      font-size: 15px;
      margin-top: 8px;
    }

    ::ng-deep mat-card-content {
      padding: 30px;
    }
  `]
})
export class AppComponent {
  showCode1 = false;
  showCode2 = false;
  showCode3 = false;
  showCode4 = false;
}