import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { todoReducer } from './exercicios/exercicio-3/exercicio-3.logic';
import { TodoEffects } from './exercicios/exercicio-3/exercicio-3';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({
      todos: todoReducer
    }),
    provideEffects([TodoEffects])
  ]
};
