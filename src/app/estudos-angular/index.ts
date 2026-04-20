/**
 * Exercícios 2.1 a 2.4: Angular e RxJS
 * 
 * Este módulo contém 4 componentes demonstrando conceitos importantes de Angular e RxJS:
 * 
 * 2.1 - OnPushComponent: Demonstra o uso de ChangeDetectionStrategy.OnPush
 *        e o ChangeDetectorRef para controle manual de change detection
 * 
 * 2.2 - BuscaDebounceComponent: Demonstra busca com debounceTime e
 *        o uso do async pipe no template HTML
 * 
 * 2.3 - SubjectBehaviorSubjectComponent: Demonstra os diferentes tipos de Subject:
 *        - Subject (multicast simples)
 *        - BehaviorSubject (estado atual)
 *        - ReplaySubject (histórico)
 *        - AsyncSubject (último valor ao completar)
 * 
 * 2.4 - OperatorsComponent: Demonstra os principais operadores RxJS:
 *        - Transformação: map, filter, scan
 *        - Tempo: debounceTime, delay, throttleTime
 *        - Combinação: mergeMap, switchMap, combineLatest, forkJoin
 *        - Utilidade: tap, catchError, retry, take, distinctUntilChanged
 */

export { OnPushComponent } from './on-push.component';
export { BuscaDebounceComponent } from './busca-debounce.component';
export { SubjectBehaviorSubjectComponent } from './subject-behavior-subject.component';
export { OperatorsComponent } from './operators.component';
