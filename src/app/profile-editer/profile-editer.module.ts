import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileEditerRoutingModule } from './profile-editer-routing.module';
import { ProfileEditerComponent } from './profile-editer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileEditerComponent],
  imports: [
    CommonModule,
    ProfileEditerRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileEditerModule { }
