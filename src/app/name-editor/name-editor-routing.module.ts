import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameEditorComponent } from './name-editor.component';

const routes: Routes = [
  { path: '', component: NameEditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NameEditorRoutingModule { }
