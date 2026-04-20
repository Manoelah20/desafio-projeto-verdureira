# Projeto Verdureira - Desafio Angular

Este projeto demonstra conhecimentos práticos em Angular 17+, RxJS, NgRx/Signals, Angular Material, TypeScript e testes unitários.

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start

# Acesse http://localhost:4200
```

## 📋 Estrutura do Projeto

O projeto é organizado em 4 exercícios, todos acessíveis através de uma interface com tabs:

### Exercício 1 - TypeScript
**Objetivo:** Refatoração e Generics
- Refatoração de código com classes TypeScript (removendo `any`)
- Implementação de função de paginação genérica com tipagem forte

### Exercício 2 - Angular & RxJS
**Objetivo:** Change Detection e Operadores RxJS
- Change Detection com OnPush e ChangeDetectorRef
- Eliminação de subscriptions aninhadas com switchMap
- Busca com debounce de 500ms e async pipe
- Performance com trackBy em listas

### Exercício 3 - Signals & NgRx
**Objetivo:** Gerenciamento de Estado
- **3.1:** Carrinho com Signals (signal, computed, output, effect)
- **3.2:** Lista de tarefas com NgRx (Actions, Reducer, Selectors, Effects)

### Exercício 4 - Store Personalizada
**Objetivo:** Integração completa
- Store personalizada com Signals
- Listagem de usuários com Angular Material
- Busca com debounce de 300ms
- Estados de loading e erro
- Cards com informações detalhadas

## 🛠️ Stack Tecnológica

- **Angular 17+** (Standalone Components, Signals)
- **RxJS** (Operadores, Subjects, Observables)
- **NgRx** (Store, Effects, Actions, Reducers)
- **Angular Material** (Componentes UI)
- **TypeScript** (Generics, Interfaces, Tipagem)
- **Vitest** (Testes Unitários)

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Executar com cobertura
npm run test:coverage
```

## 📁 Estrutura de Arquivos

```
src/app/
├── exercicios/
│   ├── exercicio-1/         # TypeScript: Refatoração e Generics
│   ├── exercicio-2/         # Angular & RxJS: OnPush, switchMap, debounce, trackBy
│   ├── exercicio-3/         # Signals & NgRx: Carrinho e To-do
│   └── exercicio-4/         # Store Personalizada: Listagem e Busca
└── app.component.ts         # Interface principal com tabs para navegação
```