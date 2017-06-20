import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormioAppConfig } from 'ng2-formio';
import { FormioAuthService, FormioAuthConfig } from 'ng2-formio/auth';
import { FormioResources } from 'ng2-formio/resource';
import { AuthConfig, AppConfig } from '../config';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      },
      {
        path: 'event',
        loadChildren: './event/event.module#EventModule'
      }
    ])
  ],
  providers: [
    FormioResources,
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
