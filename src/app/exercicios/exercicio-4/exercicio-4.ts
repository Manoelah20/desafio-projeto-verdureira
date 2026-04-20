import {
  Component,
  OnInit,
  inject,
  Inject,
  ChangeDetectionStrategy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsuarioStore } from "./exercicio-4.logic";
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from "rxjs";
import { Usuario } from "./exercicio-4.logic";

@Component({
  selector: "app-exercicio-4",
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [UsuarioStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./exercicio-4.html",
  styleUrls: ["./exercicio-4.css"],
})
export class Exercicio4Component implements OnInit {
  public store = inject(UsuarioStore);
  private dialog = inject(MatDialog);
  private fb = inject(FormBuilder);
  private buscaSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  usuarioForm!: FormGroup;

  ngOnInit() {
    this.store.carregar();

    this.buscaSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((termo) => this.store.carregar(termo));

    this.usuarioForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      tipoTelefone: ['celular', [Validators.required]],
    });
  }

  onBusca(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.buscaSubject.next(valor);
  }

  abrirModalCriar() {
    this.usuarioForm.reset();
    const dialogRef = this.dialog.open(ModalUsuarioComponent, {
      width: '500px',
      data: { usuario: null, form: this.usuarioForm },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.criar(result);
      }
    });
  }

  abrirModalEditar(usuario: Usuario) {
    this.usuarioForm.patchValue(usuario);
    const dialogRef = this.dialog.open(ModalUsuarioComponent, {
      width: '500px',
      data: { usuario, form: this.usuarioForm },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.editar({ ...usuario, ...result });
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

@Component({
  selector: 'app-modal-usuario',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
  ],
  template: `
    <h2 mat-dialog-title>{{ data.usuario ? 'Editar Usuário' : 'Adicionar novo usuário' }}</h2>
    <mat-dialog-content>
      <form [formGroup]="data.form">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Usuário (e-mail)</mat-label>
          <input matInput formControlName="email" />
          <mat-error *ngIf="data.form.get('email')?.errors?.required">E-mail é obrigatório</mat-error>
          <mat-error *ngIf="data.form.get('email')?.errors?.email">E-mail inválido</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Nome completo</mat-label>
          <input matInput formControlName="nome" />
          <mat-error *ngIf="data.form.get('nome')?.errors?.required">Nome é obrigatório</mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>CPF</mat-label>
          <input matInput formControlName="cpf" />
          <mat-error *ngIf="data.form.get('cpf')?.errors?.required">CPF é obrigatório</mat-error>
        </mat-form-field>

        <div class="phone-group">
          <mat-form-field appearance="outline" class="phone-field">
            <mat-label>Número do telefone</mat-label>
            <input matInput formControlName="telefone" />
            <mat-error *ngIf="data.form.get('telefone')?.errors?.required">Telefone é obrigatório</mat-error>
          </mat-form-field>

          <mat-form-field appearance="outline" class="phone-type">
            <mat-select formControlName="tipoTelefone">
              <mat-option value="celular">CELULAR</mat-option>
              <mat-option value="fixo">FIXO</mat-option>
            </mat-select>
          </mat-form-field>
        </div>

        <p class="info-text">
          O usuário receberá uma senha provisória para acesso ao sistema por SMS.
        </p>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-raised-button [disabled]="data.form.invalid" (click)="salvar()" style="background-color: #1976d2; color: white;">
        SALVAR
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .full-width {
      width: 100%;
      margin-bottom: 16px;
    }

    .phone-group {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
    }

    .phone-field {
      flex: 2;
    }

    .phone-type {
      flex: 1;
      min-width: 120px;
    }

    .info-text {
      color: #666;
      font-size: 13px;
      line-height: 1.5;
      margin: 16px 0 0 0;
      padding: 12px;
      background: #f5f5f5;
      border-radius: 4px;
    }
  `]
})
export class ModalUsuarioComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModalUsuarioComponent>
  ) { }

  salvar() {
    if (this.data.form.valid) {
      this.dialogRef.close(this.data.form.value);
    }
  }
}
