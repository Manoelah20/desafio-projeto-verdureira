import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
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
    MatTabsModule,
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

      <mat-tab-group class="exercises-tabs">
        <mat-tab label="Exercício 1 - TypeScript">
          <div class="tab-content">
            <h3>Refatoração e Generics</h3>
            <p>Refatoração de código com classes e implementação de função de paginação genérica.</p>
            <app-exercicio-1></app-exercicio-1>
          </div>
        </mat-tab>

        <mat-tab label="Exercício 2 - Angular & RxJS">
          <div class="tab-content">
            <h3>Change Detection e Operadores RxJS</h3>
            <p>Demonstração de OnPush, switchMap, debounceTime e trackBy para performance.</p>
            <app-exercicio-2></app-exercicio-2>
          </div>
        </mat-tab>

        <mat-tab label="Exercício 3 - Signals & NgRx">
          <div class="tab-content">
            <h3>Signals e Gerenciamento de Estado</h3>
            <p>Signals para carrinho e NgRx para lista de tarefas com Effects.</p>
            <app-exercicio-3></app-exercicio-3>
          </div>
        </mat-tab>

        <mat-tab label="Exercício 4 - Store com Signals">
          <div class="tab-content">
            <h3>Store Personalizada e Busca</h3>
            <p>Store com Signals, debounce na busca e integração com API mock.</p>
            <app-exercicio-4></app-exercicio-4>
          </div>
        </mat-tab>
      </mat-tab-group>
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

    .tab-content {
      padding: 20px;
    }

    .tab-content h3 {
      margin-top: 0;
      color: #1976d2;
    }

    .tab-content ul {
      margin: 10px 0;
      padding-left: 20px;
    }
  `]
})
export class AppComponent { }