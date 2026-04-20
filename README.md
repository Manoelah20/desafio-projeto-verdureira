# Projeto Verdureira - Desafio Angular

## Stack Tecnologia

- Angular 17+
- Angular Material
- Signals
- RxJS
- Vitest

## Pré-requisitos

- Node.js 18+
- npm 9+

## Instalação

```bash
# Clonar o repositório
git clone <repo-url>

# Entrar no diretório
cd projeto-verdureira

# Instalar dependências
npm install
```

## Executar projeto

```bash
# Modo desenvolvimento
npm start

# Acesse http://localhost:4200
```

## Exercícios Implementados

### Exercício 1 - TypeScript
- Refatoração de classes com TypeScript (removendo `any`)
- Generic para paginação com tipagem forte

### Exercício 2 - Angular + RxJS
- Change Detection with OnPush
- Eliminação de subscribe aninhado com switchMap
- Busca com debounce de 500ms
- Performance com trackBy

### Exercício 3 - Signals + NgRx
- 3.1: Carrinho com Signals (signal, computed, output, effect)
- 3.2: To-do com NgRx (Actions, Reducer, Selectors, Effect)

### Exercício 4 - Aplicação Completa
- Listagem de usuários com Angular Material
- Cards com nome, e-mail e botão editar
- Filtro com debounce 300ms
- Estados de loading e erro
- Formulário reativo com validações

## Executar testes

```bash
# Todos os testes
npm test

# Cobertura
npm run test:coverage
```