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
      <span>Desafio Angular - Projeto Verdureira</span>
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
          <p class="note"><strong>💡 Dica:</strong> Clique em "Ver Código" para ver o código-fonte de cada exercício.</p>
        </mat-card-content>
      </mat-card>

      <div class="exercises-nav">
        <button mat-raised-button (click)="selectedExercise = 1" [color]="selectedExercise === 1 ? 'primary' : ''">
          Exercício 1 - TypeScript
        </button>
        <button mat-raised-button (click)="selectedExercise = 2" [color]="selectedExercise === 2 ? 'primary' : ''">
          Exercício 2 - Angular & RxJS
        </button>
        <button mat-raised-button (click)="selectedExercise = 3" [color]="selectedExercise === 3 ? 'primary' : ''">
          Exercício 3 - Signals & NgRx
        </button>
        <button mat-raised-button (click)="selectedExercise = 4" [color]="selectedExercise === 4 ? 'primary' : ''">
          Exercício 4 - Store com Signals
        </button>
      </div>

      <mat-card class="exercise-card" *ngIf="selectedExercise === 1">
        <mat-card-header>
          <mat-card-title>Exercício 1 - TypeScript</mat-card-title>
          <mat-card-subtitle>Refatoração e Generics</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Refatoração de código com classes e implementação de função de paginação genérica.</p>
          <button mat-button (click)="showCode = !showCode" class="code-toggle">
            {{ showCode ? 'Ocultar Código' : 'Ver Código' }}
          </button>
          <div class="code-section" *ngIf="showCode">
            <h4>Arquivos Principais:</h4>
            <ul class="file-list">
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-1/exercicio-1.component.ts" target="_blank">exercicio-1.component.ts</a></li>
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-1/exercicio-1.logic.ts" target="_blank">exercicio-1.logic.ts</a></li>
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-1/exercicio-1.component.html" target="_blank">exercicio-1.component.html</a></li>
            </ul>
          </div>
          <div class="demo-section" *ngIf="!showCode">
            <app-exercicio-1></app-exercicio-1>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="exercise-card" *ngIf="selectedExercise === 2">
        <mat-card-header>
          <mat-card-title>Exercício 2 - Angular & RxJS</mat-card-title>
          <mat-card-subtitle>Change Detection e Operadores RxJS</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Demonstração de OnPush, switchMap, debounceTime e trackBy para performance.</p>
          <button mat-button (click)="showCode = !showCode" class="code-toggle">
            {{ showCode ? 'Ocultar Código' : 'Ver Código' }}
          </button>
          <div class="code-section" *ngIf="showCode">
            <h4>Arquivos Principais:</h4>
            <ul class="file-list">
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/tree/master/src/app/exercicios/exercicio-2" target="_blank">exercicio-2/ (todos os sub-exercícios)</a></li>
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-2/detect-onpush/detect-onpush.ts" target="_blank">detect-onpush.ts (Change Detection)</a></li>
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-2/busca-debounce/busca-debounce.ts" target="_blank">busca-debounce.ts (Debounce)</a></li>
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-2/rxjs-switchmap/rxjs-switchmap.ts" target="_blank">rxjs-switchmap.ts (SwitchMap)</a></li>
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-2/performance-lista/performance-lista.ts" target="_blank">performance-lista.ts (TrackBy)</a></li>
            </ul>
          </div>
          <div class="demo-section" *ngIf="!showCode">
            <app-exercicio-2></app-exercicio-2>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="exercise-card" *ngIf="selectedExercise === 3">
        <mat-card-header>
          <mat-card-title>Exercício 3 - Signals & NgRx</mat-card-title>
          <mat-card-subtitle>Signals e Gerenciamento de Estado</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Signals para carrinho e NgRx para lista de tarefas com Effects.</p>
          <button mat-button (click)="showCode = !showCode" class="code-toggle">
            {{ showCode ? 'Ocultar Código' : 'Ver Código' }}
          </button>
          <div class="code-section" *ngIf="showCode">
            <h4>Arquivos Principais:</h4>
            <ul class="file-list">
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-3/exercicio-3.ts" target="_blank">exercicio-3.ts (Componente Principal)</a></li>
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-3/exercicio-3.logic.ts" target="_blank">exercicio-3.logic.ts (NgRx Store)</a></li>
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-3/exercicio-3.html" target="_blank">exercicio-3.html (Template)</a></li>
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/app.config.ts" target="_blank">app.config.ts (Configuração NgRx)</a></li>
            </ul>
          </div>
          <div class="demo-section" *ngIf="!showCode">
            <app-exercicio-3></app-exercicio-3>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="exercise-card" *ngIf="selectedExercise === 4">
        <mat-card-header>
          <mat-card-title>Exercício 4 - Store com Signals</mat-card-title>
          <mat-card-subtitle>Store Personalizada e Busca</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Store com Signals, debounce na busca e integração com API mock.</p>
          <button mat-button (click)="showCode = !showCode" class="code-toggle">
            {{ showCode ? 'Ocultar Código' : 'Ver Código' }}
          </button>
          <div class="code-section" *ngIf="showCode">
            <h4>Arquivos Principais:</h4>
            <ul class="file-list">
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-4/exercicio-4.ts" target="_blank">exercicio-4.ts (Componente)</a></li>
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-4/exercicio-4.logic.ts" target="_blank">exercicio-4.logic.ts (Store com Signals)</a></li>
              <li><a href="https://github.com/Manoelah20/desafio-projeto-verdureira/blob/master/src/app/exercicios/exercicio-4/exercicio-4.html" target="_blank">exercicio-4.html (Template)</a></li>
            </ul>
          </div>
          <div class="demo-section" *ngIf="!showCode">
            <app-exercicio-4></app-exercicio-4>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 20px auto;
      padding: 0 20px;
    }

    .intro-card {
      margin-bottom: 20px;
    }

    .note {
      background: #e3f2fd;
      padding: 10px;
      border-radius: 4px;
      margin-top: 15px;
    }

    .exercises-nav {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }

    .exercises-nav button {
      flex: 1;
      min-width: 200px;
    }

    .exercise-card {
      margin-bottom: 20px;
    }

    .code-toggle {
      margin-bottom: 15px;
    }

    .code-section {
      background: #f5f5f5;
      padding: 20px;
      border-radius: 4px;
      margin-top: 15px;
    }

    .code-section h4 {
      margin-top: 0;
      color: #1976d2;
    }

    .file-list {
      list-style: none;
      padding: 0;
    }

    .file-list li {
      margin: 8px 0;
    }

    .file-list a {
      color: #1976d2;
      text-decoration: none;
    }

    .file-list a:hover {
      text-decoration: underline;
    }

    .demo-section {
      margin-top: 15px;
    }
  `]
})
export class AppComponent {
  selectedExercise = 1;
  showCode = false;
}