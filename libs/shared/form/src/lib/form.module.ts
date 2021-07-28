import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ControlInputComponent } from './components/control-input/control-input.component';
import { ControlSelectComponent } from './components/control-select/control-select.component';

@NgModule({
  imports: [CommonModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  declarations: [
    ControlInputComponent,
    ControlSelectComponent
  ],
  exports: [
    ControlInputComponent,
    ControlSelectComponent
  ],
})
export class FormModule {}
