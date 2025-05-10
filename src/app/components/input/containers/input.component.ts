import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputType } from '../models/input.model';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipDirective } from '../../../directives/tooltip.directive';

@Component({
  selector: 'w-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    TooltipDirective,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements OnInit {
  ngOnInit(): void {}
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() type: InputType = 'text';
  @Input() disabled: boolean = false;
  @Input() tooltip: string = '';
  @Input() required: boolean = false;
  @Input() icon?: string;
  @Input() helpText?: string;
  @Input() errorText?: string;
  @Input() class?: string;
  @Input() control!: any;

  get errorMessage(): string | null {
    if (!this.control || !this.control.errors || !this.control.touched)
      return null;

    const errors = this.control.errors;
    if (this.errorText) return this.errorText;

    if (errors['required']) return 'Campo obrigatório.';
    if (errors['email']) return 'E-mail inválido.';
    if (errors['minlength'])return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;
    if (errors['maxlength'])return `Máximo de ${errors['maxlength'].requiredLength} caracteres.`;
    if (errors['min']) return `Valor mínimo: ${errors['min'].min}.`;
    if (errors['max']) return `Valor máximo: ${errors['max'].max}.`;
    if (errors['pattern']) return 'Formato inválido.';

    // fallback genérico
    return 'Valor inválido.';
  }
}
