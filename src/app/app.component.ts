import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <span>Projeto Verdureira</span>
    </mat-toolbar>
    <div class="content">
      <p>Bem-vindo ao desafio Angular!</p>
      <p>Os exercícios estão em: <code>src/app/exercicios/</code></p>
    </div>
  `,
  styles: [`
    .content { padding: 20px; }
    code { background: #f5f5f5; padding: 2px 6px; }
  `]
})
export class AppComponent {}