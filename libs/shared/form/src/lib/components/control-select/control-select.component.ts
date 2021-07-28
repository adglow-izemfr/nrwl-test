/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rsrch-form-control-select',
  templateUrl: './control-select.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlSelectComponent),
      multi: true,
    }
  ]
})
export class ControlSelectComponent implements ControlValueAccessor {
  @Input() form!: FormGroup;
  @Input() formControlName = '';
  @Input() label = '';
  @Input() options: string[] = [];

  value: unknown;
  private emitChange: any;
  private emitTouch: any;

  constructor() {}

  writeValue(formValue: any): void {
    this.value = formValue;
  }
  registerOnChange(formOnChangeCallback: any): void {
    this.emitChange = formOnChangeCallback;
  }
  registerOnTouched(formOnTouchedCallback: any): void {
    this.emitTouch = formOnTouchedCallback;
  }

  onSelect(event: any) {
    this.value = event.target.value;
    this.emitChange(this.value);
    this.emitTouch();
  }

  hasErrorToShow() {
    const control = this.form.controls[this.formControlName];
    return control.touched && control.invalid;
  }

  hasError() {
    const control = this.form.controls[this.formControlName];
    return control.invalid;
  }

  getErrorMessage() {
    const control = this.form.controls[this.formControlName];
    return JSON.stringify(control.errors);
  }

}
