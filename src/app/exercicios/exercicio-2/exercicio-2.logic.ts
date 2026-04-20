/**
 * EXERCÍCIO 2: CONSIDERAÇÕES TÉCNICAS E ARQUITETURA
 * * Nesta seção, apliquei os seguintes conceitos de alta performance:
 * * 1. ChangeDetectionStrategy.OnPush: Redução de ciclos de detecção,
 * notificando o Angular apenas quando necessário via ChangeDetectorRef.
 * * 2. RxJS Mastery: Uso de switchMap para cancelamento de subscrições
 * aninhadas e debounceTime para otimização de requisições de busca.
 * * 3. DOM Optimization: Implementação de trackBy em listas para evitar
 * a destruição e recriação desnecessária de elementos DOM.
 */

export interface ExercicioStatus {
  sessao: string;
  status: "Pendente" | "Concluido";
}

export const STATUS_LISTA: ExercicioStatus[] = [
  { sessao: "2.1", status: "Concluido" },
  { sessao: "2.2", status: "Concluido" },
  { sessao: "2.3", status: "Concluido" },
  { sessao: "2.4", status: "Concluido" },
];
