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
          <app-exercicio-1></app-exercicio-1>
        </mat-card-content>
      </mat-card>

      <mat-card class="exercise-card" *ngIf="selectedExercise === 2">
        <mat-card-header>
          <mat-card-title>Exercício 2 - Angular & RxJS</mat-card-title>
          <mat-card-subtitle>Change Detection e Operadores RxJS</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Demonstração de OnPush, switchMap, debounceTime e trackBy para performance.</p>
          <app-exercicio-2></app-exercicio-2>
        </mat-card-content>
      </mat-card>

      <mat-card class="exercise-card" *ngIf="selectedExercise === 3">
        <mat-card-header>
          <mat-card-title>Exercício 3 - Signals & NgRx</mat-card-title>
          <mat-card-subtitle>Signals e Gerenciamento de Estado</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Signals para carrinho e NgRx para lista de tarefas com Effects.</p>
          <app-exercicio-3></app-exercicio-3>
        </mat-card-content>
      </mat-card>

      <mat-card class="exercise-card" *ngIf="selectedExercise === 4">
        <mat-card-header>
          <mat-card-title>Exercício 4 - Store com Signals</mat-card-title>
          <mat-card-subtitle>Store Personalizada e Busca</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>Store com Signals, debounce na busca e integração com API mock.</p>
          <app-exercicio-4></app-exercicio-4>
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

    .exercise-card h3 {
      margin-top: 0;
      color: #1976d2;
    }
  `]
})
export class AppComponent {
  selectedExercise = 1;
}