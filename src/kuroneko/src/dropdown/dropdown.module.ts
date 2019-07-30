import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DropdownComponent,
  ],
  providers: [],
})
export class DropdownModule {}
