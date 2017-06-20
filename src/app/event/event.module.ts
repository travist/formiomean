import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormioResource, FormioResourceRoutes, FormioResourceConfig, FormioResourceService } from 'ng2-formio/resource';
import { EventViewComponent } from './event-view/event-view.component';
import { EventResourceComponent } from './event-resource/event-resource.component';

const eventResourceRoutes: Routes = FormioResourceRoutes({
  view: EventViewComponent,
  resource: EventResourceComponent
});

eventResourceRoutes[2].children.push({
  path: 'register',
  loadChildren: './registration/registration.module#RegistrationModule'
});

@NgModule({
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(eventResourceRoutes)
  ],
  declarations: [EventViewComponent, EventResourceComponent],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'event',
      form: 'event'
    }}
  ]
})
export class EventModule { }
