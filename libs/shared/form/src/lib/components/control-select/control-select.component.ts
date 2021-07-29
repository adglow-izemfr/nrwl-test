/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'rsrch-form-control-select',
  templateUrl: './control-select.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlSelectComponent),
      multi: true,
    },
  ],
})
export class ControlSelectComponent implements ControlValueAccessor, OnInit {
  @Input() form!: FormGroup;
  @Input() formControlName = '';
  @Input() label = '';
  @Input() options: string[] = [];

  value!: string;
  selectFormControl!: FormControl;
  private emitChange: any;
  private emitTouch: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.selectFormControl = this.form.controls[
      this.formControlName
    ] as FormControl;
  }

  writeValue(formValue: string): void {
    this.value = formValue;
  }
  registerOnChange(formOnChangeCallback: any): void {
    this.emitChange = formOnChangeCallback;
  }
  registerOnTouched(formOnTouchedCallback: any): void {
    this.emitTouch = formOnTouchedCallback;
  }

  onSelect(event: any) {
    console.log('Selection: ', event.value);
    this.value = event.value as string;
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
