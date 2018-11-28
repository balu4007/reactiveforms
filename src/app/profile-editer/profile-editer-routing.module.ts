import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileEditerComponent } from './profile-editer.component';

const routes: Routes = [
  { path: '', component: ProfileEditerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileEditerRoutingModule { }
