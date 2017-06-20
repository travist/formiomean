import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioResource, FormioResourceRoutes, FormioResourceConfig, FormioResourceService } from 'ng2-formio/resource';

@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes())
  ],
  declarations: [],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'register',
      form: 'register',
      parents: ['event']
    }}
  ]
})
export class RegistrationModule { }
