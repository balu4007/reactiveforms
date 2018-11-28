import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { NameEditorRoutingModule } from './name-editor-routing.module';
import { NameEditorComponent } from './name-editor.component';

@NgModule({
  declarations: [NameEditorComponent],
  imports: [
    CommonModule,
    NameEditorRoutingModule,
    ReactiveFormsModule
  ]
})
export class NameEditorModule { }