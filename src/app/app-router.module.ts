import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
const routes: Routes = [
  { path: 'name-edit', loadChildren:'./name-editor/name-editor.module#NameEditorModule'},
  { path: 'profile-edit', loadChildren:'./profile-editer/profile-editer.module#ProfileEditerModule' },
  { path: '', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ] 
})
export class AppRouterModule { }
