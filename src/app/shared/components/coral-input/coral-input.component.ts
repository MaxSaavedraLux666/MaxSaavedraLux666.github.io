import { Component, forwardRef, input, signal } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'coral-input',
  standalone: true,
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CoralInputComponent),
    },
  ],
  template: `
    <label
      class="flex flex-row p-3 pl-4 space-x-2 items-center rounded-md border-solid border border-gray-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-colors duration-150 ease-in-out"
      [class]="inputClass()"
    >
      <ng-content></ng-content>
      <input
        #inputValue
        [type]="inputType()"
        [placeholder]="inputPlaceholder()"
        [autocomplete]="inputAutocomplete()"
        (input)="onChange(inputValue.value)"
        [(ngModel)]="input"
        [disabled]="isDisabled()"
        class="w-full border-0 p-0 m-0 focus:outline-none focus:shadow-none"
      />
    </label>
  `,
})
export class CoralInputComponent implements ControlValueAccessor {
  public inputType = input<string>('text');
  public inputPlaceholder = input<string>('');
  public inputAutocomplete = input<string>('off');
  public inputClass = input<string>('');
  public isDisabled = signal<boolean>(false);

  public input: string = '';

  public onChange: any = () => {};

  public onTouched: any = () => {};

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  public setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }
  public writeValue(input: any): void {
    if (input !== undefined) {
      this.input = input;
    }
  }
}
